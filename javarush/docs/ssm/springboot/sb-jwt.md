### JSON

> 直接将表单传入以请求后端， 无需指定参数类型

前端代码：

```js
this.axios
	.post("http://localhost:10086/login", this.form)
	.then((res) => {})
	.catch((err) => {});
```

后端代码：

使用 `@RequestBody` 接收即可（User 是一个 entity）

```java
@PostMapping("/login")
public String validateLogin(@RequestBody User user) {
    return userService.validateLoginService(user.getUsername(), user.getPassword());
}
```

<br>

### Form-data

为便于 apifox 或者 postman 的快捷请求，故推荐使用 formdata 的形式来请求后端

前端代码如下

```js
// 构造formdata对象并安装键值对的形式插入内容
// this.form表示收集到的表单内容
let dt = new FormData();
dt.append("username", this.form.username);
dt.append("password", this.form.password);

this.axios
	.post("http://localhost:10086/login", dt, {
		// 注意设置参数类型
		headers: { "Content-Type": "multipart/form-data" },
	})
	.then((res) => {})
	.catch((err) => {});
```

后端代码：

请使用 `@RequestParam` 而非 `@RequestBody`，以免接收不到请求

这里省略了 entity 和 service 具体细节，相信以你的能力处理应该不难

```java
@RestController
@CrossOrigin(originPatterns = "*")
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/login")
    public String validateLogin(@RequestParam String username, @RequestParam String password) {
        return userService.validateLoginService(username, password);
    }
}
```

<br>

### 基本验证

#### 个人理解的基本过程

1. 用户首次登陆，请求 token，后端颁发
2. 用户登录后携带 token 进行接口请求，后端检测到 token 则返回结果，否则予以拒绝
3. 用户没 token 无法请求对应接口
4. token 必须要有过期时长，不可以一直使用
5. 不要在前端进行 token 的校验判断，这些都是后端的工作

<br>

#### 依赖

```xml
<!-- https://mvnrepository.com/artifact/com.auth0/java-jwt -->
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>3.9.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.json/json -->
<dependency>
    <groupId>org.json</groupId>
    <artifactId>json</artifactId>
    <version>20190722</version>
</dependency>
```

<br>

#### 拦截器

新增文件夹 config

添加全局拦截器 webconfiguration.java

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ConcurrentTaskExecutor;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    @Autowired
    private TokenInterceptor tokenInterceptor;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowedOriginPatterns("*");
    }

    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
        configurer.setTaskExecutor(new ConcurrentTaskExecutor(Executors.newFixedThreadPool(3)));
        configurer.setDefaultTimeout(3000);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        List<String> excludePath = new ArrayList<>();
        //排除拦截，除了注册登录(此时还没token)，其他都拦截
        excludePath.add("/api/login");  //登录
        excludePath.add("/api/register");     //注册
        excludePath.add("/doc.html");     //swagger
        excludePath.add("/swagger-ui.html");     //swagger
        excludePath.add("/swagger-resources/**");     //swagger
        excludePath.add("/v2/api-docs");     //swagger
        excludePath.add("/webjars/**");     //swagger
        registry.addInterceptor(tokenInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(excludePath);
        WebMvcConfigurer.super.addInterceptors(registry);
    }
}
```

<br>

token 拦截器 tokeninterceptor.java

```java
import com.zhiyiyi.backend.utils.TokenUtil;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class TokenInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        //跨域请求会首先发一个option请求，直接返回正常状态并通过拦截器
        if (request.getMethod().equals("OPTIONS")) {
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }
        response.setCharacterEncoding("utf-8");
        String token = request.getHeader("token");
        if (token != null) {
            boolean result = TokenUtil.verify(token);
            if (result) {
                System.out.println("通过拦截器");
                return true;
            }
        }
        response.setContentType("application/json; charset=utf-8");
        try {
            JSONObject json = new JSONObject();
            json.put("msg", "token verify fail");
            json.put("code", "500");
            response.getWriter().append(json.toString());
            System.out.println("认证失败，未通过拦截器");
        } catch (Exception e) {
            return false;
        }
        /**
         * 还可以在此处检验用户存不存在等操作
         */
        return false;
    }
}
```

<br>

#### 前端处理

以下代码为封装 axios 请求

注册请求拦截器，并为请求头添加 token 参数；  
从 localstorage 里面找，找得到就返回，找不到返回 null；

```js
service.interceptors.request.use(
	(config) => {
		config.headers["token"] = getToken("token") ? getToken("token") : "null";
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
```

<br>

至于登陆校验 validate 以及 axios 请求 post 这些玩意请参考其他文章，这里不做解析

> 请记住这一点，目前每一条请求都附带一个本用户 token，或者为 null

<br>

#### 后端处理

token 工具类，进行 token 颁发以及验证

```java
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.zhiyiyi.backend.entity.User;

import java.util.Date;

public class TokenUtil {

    // 设置token过期时间为10h
    private static final long EXPIRE_TIME = 10 * 60 * 60 * 1000;
    // 加盐
    private static final String TOKEN_SECRET = "ljdyai13daseqi?:Aqwe12*&*^";


    // 颁发token
    public static String sign(User user) {

        String token = null;
        try {
            Date expireAt = new Date(System.currentTimeMillis() + EXPIRE_TIME);
            token = JWT.create()
                    //发行人
                    .withIssuer("auth0")
                    //存放数据
                    .withClaim("username", user.getUsername())
                    //过期时间
                    .withExpiresAt(expireAt)
                    // 加密方式
                    .sign(Algorithm.HMAC256(TOKEN_SECRET));
        } catch (IllegalArgumentException | JWTCreationException ignored) {

        }
        return token;
    }


    // 验证token
    public static Boolean verify(String token) {

        try {
            //创建token验证器
            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(TOKEN_SECRET)).withIssuer("auth0").build();
            // JWT解码token，验证通过即在后端展示出来
            DecodedJWT decodedJWT = jwtVerifier.verify(token);
            System.out.println("认证通过：");
            System.out.println("username: " + decodedJWT.getClaim("username").asString());
            System.out.println("过期时间：      " + decodedJWT.getExpiresAt());
        } catch (IllegalArgumentException | JWTVerificationException e) {
            //抛出错误即为验证不通过
            return false;
        }
        return true;
    }

}
```

<br>

在任意一个 controller 内获取 token

下面展示了一个无参 POST 请求；

`@RequestHeader("token")` 表示获取 header 中 key 为 token 的值

使用工具类对 token 校验，校验成功则返回对应信息

```java
@PostMapping("/info")
public String getInfo(@RequestHeader("token") String header) {
    if (TokenUtil.verify(header)) {
        return "你有权限访问该接口！";
    }
    return "你无权访问！";
}
```

<br>

### 基本使用

#### Get/Post

我们可以通过简单的注释，来简化 GET/POST 请求

代码解释

1. @GetMapping，括号内填 GET 请求的路径，其中的花括号包裹着占位符
2. @PathVariable(value = "id")表示映射当前形参为占位符“id”，即当我们请求 url 是把占位符内容取出填到形参位置上
3. 如果形参名称和占位符名称一致，那么无需设置 value，REST 会自动帮我们映射好

```java
@RestController
public class MyRestController {

    // 可以使用value明确指定填充的内容
    @GetMapping("/std/{id}")
    public String queryStd(@PathVariable(value = "id") Integer id) {
        return "查询到的学生id" + id.toString();
    }

    // 如果形参名和mapping中的变量名一致，就无须设置value
    @PostMapping("/std/{name}/{age}")
    public String setStd(
            @PathVariable String name,
            @PathVariable Integer age
    ) {
        return "添加了新的" + name + " " + age;
    }
}
```

<br>

#### 尝试使用 PUT

因为一般浏览器都会禁止 PUT/DELETE 请求方式的使用，但是我们可以通过球盖 input 标签的代码来绕过这一限制

通过 POST 请求模拟 PUT 请求

在网页键入如下代码，则当我们点击 submit 按钮时，是使用 post 的方法发出了 put 请求；

> 此时我们再在后端编写 PutMapping 也可以正常接收了！！！

```html
<form
	action="std/put"
	method="post"
>
	<!-- 下面一行代码类似于注解，表示下下一行的input发出的信息我put请求 -->
	<input
		type="hidden"
		name="_method"
		value="put"
	/>
	<input
		type="submit"
		value="put请求方式"
	/>
</form>
```

<br>

### 快速上手

#### 导包

swagger3 仅需导入一个包且配置更加快捷，故在此不介绍 swagger2

swagger-bootstrap-ui 是国内大神为了美化 swagger 页面的依赖，建议添加

```xml
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-boot-starter</artifactId>
  <version>3.0.0</version>
</dependency>
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>swagger-bootstrap-ui</artifactId>
    <version>1.9.6</version>
</dependency>
```

<br>

####
