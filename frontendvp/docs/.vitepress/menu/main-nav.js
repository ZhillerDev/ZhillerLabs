export const MainNav = [
	{
		text: "首页",
		link: "/",
	},
	{
		text: "快速开始",
		items: [
			{
				text: "HTML",
				link: "/basic/html/h1",
			},
			{
				text: "CSS",
				link: "/basic/css/c1-svg",
			},
			{
				text: "Javascript",
				link: "/basic/js/j1",
			},
		],
		activeMatch: "/basic/",
	},
	{
		text: "前端进阶",
		link: "/deep/index",
		activeMatch: "/deep/",
	},
	{ text: "项目分析", link: "/project/prj", activeMatch: "/project/" },
	{ text: "面试", link: "/interview/index", activeMatch: "/interview/" },
];
