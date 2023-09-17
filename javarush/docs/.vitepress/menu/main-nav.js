export const MainNav = [
	{
		text: "首页",
		link: "/",
	},
	{
		text: "Java",
		items: [
			{
				text: "Java基础",
				link: "/java/basic/j1",
			},
			{
				text: "JVM",
				link: "/java/jvm/jvm1",
			},
		],
		activeMatch: "/java/",
	},
	{
		text: "SSM",
		items: [
			{
				text: "Spring",
				link: "/ssm/spring/s1",
			},
		],
		activeMatch: "/ssm/",
	},
	{
		text: "SQL",
		items: [
			{
				text: "MySQL",
				link: "/sql/mysql/jdbc",
			},
			{
				text: "Redis",
				link: "/sql/redis/d1",
			},
		],
		activeMatch: "/sql/",
	},
	{
		text: "微服务",
		items: [
			{
				text: "MySQL",
				link: "/sql/mysql/jdbc",
			},
		],
		activeMatch: "/ms/",
	},
	{
		text: "项目实战",
		items: [
			{
				text: "黑马点评",
				link: "/prj/dp/d1",
			},
			{
				text: "牛客论坛",
				link: "/sql/redis/d1",
			},
		],
		activeMatch: "/prj/",
	},
];
