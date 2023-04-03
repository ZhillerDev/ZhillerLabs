import { BasicMenu } from "./menu/basic-menu";
import { InterviewMenu } from "./menu/interview-menu";
import { MainNav } from "./menu/main-nav";

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
		nav: MainNav, // 导航抽离
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

		// 侧边栏抽离
		sidebar: {
			"/basic/": BasicMenu,
			"/interview/": InterviewMenu,
		},
	},
	cleanUrls: true,
};
