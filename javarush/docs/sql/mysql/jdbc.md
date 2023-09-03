### 环境配置

目前所有的演示均基于 mysql5.7 版本

使用 navicat15.0 版本管理我们的 mysql 数据库

需要前往 maven 中心仓库下载 mysql-connector-java，并作为依赖导入我们的项目工程库中

<br>

### 建立链接的方式

> 我们可以使用多种方式与数据库建立连接

建立数据库连接前需要准备三个元素：url，user，password  
分别表示数据库地址、数据库用户名以及用户名密码

<br>

#### 反射法

可以直接使用反射加载驱动而无需再次注册驱动，故直接使用 Class.forName 引入驱动库即可

再调用 drivermanager 来获取链接

```java
@Test
public void jdbc1() {
    // 链接信息三大件
    String user = "root";
    String password = "123456";
    String url = "jdbc:mysql://localhost:3306/springboot";

    try {
        // 反射方式加载driver
        Class.forName("com.mysql.jdbc.Driver");

        // 使用DriverManager建立数据库链接
        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println(connection);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

<br>

#### 注册驱动法

比上一种方式多了俩行，实在是没必要

```java
@Test
public void jdbc2() {
    // 链接信息三大件
    String user = "root";
    String password = "123456";
    String url = "jdbc:mysql://localhost:3306/springboot";

    try {
        // 反射后再次注册（多此一举）
        Class clazz = Class.forName("com.mysql.jdbc.Driver");
        Driver driver = (Driver) clazz.newInstance();
        DriverManager.registerDriver(driver);

        // 使用DriverManager建立数据库链接
        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println(connection);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

<br>

### 输入流获取配置项

首先我们需要在工程目录下的 src 文件夹内新建一个配置文件，用来存储我们对于数据库基本配置

```
user = root
password = 123456
url = jdbc:mysql://localhost:3306/springboot
driver = com.mysql.jdbc.Driver
```

FileInputStream 读取配置项并获取配置

```java
@Test
public void jdbc3() throws Exception {
    // 输入流获取src目录下的配置文件
    InputStream is = new FileInputStream("src\\jdbc.properties");
    Properties pro = new Properties();
    pro.load(is);
    // 读入指定配置项
    String url = pro.getProperty("url");
    String user = pro.getProperty("user");
    String password = pro.getProperty("password");
    String driverClass = pro.getProperty("driver");

    // 注册与链接获取
    Class.forName(driverClass);
    Connection connection = DriverManager.getConnection(url, user, password);
    System.out.println(connection);
}
```

<br>

### 安装 cpolar

> cpolar 是一款内外穿透软件，非常方便且免费

官网下载软件：https://www.cpolar.com

注册用户，选择免费版本

直接安装即可

<br>

打开 `cpolar gui.exe`

此时打开的网页选择创建隧道，按照下图方式对 3306 端口进行内网穿透

![](../img/sql/cpolar/cq1.png)

<br>

点击一次创建后即可选择“隧道列表”，找到我们刚刚创建的隧道，点击启动；

于“在线隧道列表”内查看当前隧道状态，记下公网地址！

![](../img/sql/cpolar/cq2.png)

<br>

### 链接 mysql

> 省略 mysql 的安装过程！

打开 navcat，新建一个链接

按照以下格式填写：

1. 主机名：随便取
2. 主机：去掉开头的 `tcp://` 以及结尾的端口号后剩下的内容
3. 端口：填写公网地址的端口！不是 3306！！！
4. 账户密码：你安装 mysql 设置的直接写进去就好了

![](../img/sql/cpolar/cq3.png)

<br>

直接点击链接就可以连接到我们的数据库了

该方法亦可以在虚拟机而非物理机上实现！

<br>

### 创建数据库

> 演示使用 MySQL 版本为 5.7

<br>

自行去官网下载并安装 MySQL，默认的数据库访问地址为 `localhost:3306`

我们使用 navicat 链接数据库，显示为正常链接；

所有 MySQL 在创建的一刻都会默认新建一个数据库 mysql，里面存储系统以及用户配置信息；  
打开命令提示符，依次输入以下代码查询 user 表中的内容

```sh
# 登陆mysql
mysql -u root -p

# 输入密码并成功链接数据库后，打开数据库mysql
use mysql

# 查询user表中的两个关键属性host和user
select host,user from user;
```

<br>

默认第一行即为我们的 root 用户，此时他的 host 一列数据为 localhost，表示仅支持从 localhost 访问 root 用户；

<br>

### 修改 host

直接接着上一步输入以下代码把 host 修改为%  
`update user set host = '%' where user = 'root';`

然后刷新权限（这里很重要！不刷新就一直连接不上！）  
`flush privileges`

<br>

### 开启 3306 端口

对于 windows 系统，我们需要添加对 3306 端口的规则来让外部 shell 可以连接到远程数据库

依次点击：  
控制面板->windows defender 防火墙->高级设置->入站规则->新建规则  
选择：端口->TCP\特定本地端口 3306->允许连接->全部勾选->名称随便取->完成

此时防火墙就不会拦截 3306 端口了

<br>

### 实践演示

输入 ipconfig 查看本机的本地地址（如果需要使用外网地址，需要配置 NAT，步骤过多，这里不做赘述）

如果没有安装虚拟机，则直接找到唯一的一个 IPV4 地址，使用它；  
如果安装虚拟机，并且开启了桥接模式的话，需要使用“无线适配器 VNET8”下的 IPV4 地址；

直接拿该地址放入 navicat 后使用即可！

<br>
