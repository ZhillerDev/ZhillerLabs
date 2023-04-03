export default {
	title: "ZerFe",
	themeConfig: {
		aside: true,
		outline: "deep",
		outlineBadges: true,
		outlineTitle: "目录",
		lang: "zh-CN",
		logo: "/icons/index.svg",
		siteTitle: "ZerFrontend",
		lastUpdated: true,
		nav: [
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
				link: "/deep/dep",
				activeMatch: "/deep/",
			},
			{ text: "项目分析", link: "/project/prj", activeMatch: "/project/" },
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/zhiyiyi" },
			{ icon: "discord", link: "https://discord.gg/Qs4Mtr23QG" },
		],
		footer: {
			message: "Released under the undefined License.",
			copyright: "Copyright © 2023-present Zhiller",
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
					items: [
						{ text: "HTML快速入门", link: "/basic/html/h1" },
						{
							text: "HTTP协议及详解",
							link: "/basic/html/h2",
						},
					],
				},
				{
					text: "CSS",
					collapsed: true,
					items: [
						{ text: "SVG详解", link: "/basic/css/c1-svg" },
						{ text: "WebGL原理与基础案例", link: "/basic/css/c2-webgl" },
					],
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
