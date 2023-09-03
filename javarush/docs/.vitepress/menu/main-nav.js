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
				text: "并发多线程",
				link: "/java/routine/r1",
			},
		],
		activeMatch: "/java/",
	},
	{
		text: "SSM",
		items: [
			{
				text: "Spring内核",
				link: "/ssm/spring/sp1",
			},
		],
		activeMatch: "/ssm/",
	},
	{
		text: "SQL",
		items: [
			{
				text: "MySQL",
				link: "/sql/mysql/m1",
			},
			{
				text: "Redis",
				link: "/sql/redis/d1",
			},
		],
		activeMatch: "/sql/",
	},
];
