export default {
	title: "ZerFe",
	themeConfig: {
		aside: true,
		outline: "deep",
		outlineBadges: true,
		outlineTitle: "目录",
		lang: "zh-CN",
		logo: "/icons/car.svg",
		siteTitle: "ZerFrontend",
		lastUpdated: true,
		nav: [
			{
				text: "首页",
				link: "/",
			},
			{
				text: "快速开始",
				link: "/basic/html/h1",
				activeMatch: "/basic/",
			},
			{ text: "前端进阶", link: "/" },
			{ text: "项目分析", link: "/" },
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
		footer: {
			message: "Released under the undefined License.",
			copyright: "Copyright © 2023-present Zhiller",
		},
		editLink: {
			pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
			text: "在Github中编辑此页面",
		},
		algolia: {
			appId: "R2IYF7ETH7",
			apiKey: "599cec31baffa4868cae4e79f180729b",
			indexName: "index",
		},
		docFooter: {
			prev: "上一篇文章",
			next: "下一篇文章",
		},
		sidebar: {
			"/basic/": [
				{
					text: "HTML",
					collapsed: true,
					items: [{ text: "标签介绍", link: "/basic/html/h1" }],
				},
				{
					text: "Javascript",
					collapsed: true,
					items: [{ text: "基础语法速通", link: "/basic/js/j1" }],
				},
			],
		},
	},
	cleanUrls: true,
};
