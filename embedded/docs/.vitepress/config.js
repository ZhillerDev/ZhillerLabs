import { defineConfig } from "vitepress";

import { MainNav } from "./menu/main-nav";
import { C51Menu } from "./menu/hw/c51-menu";
import { ESP32Menu } from "./menu/hw/esp32-menu";
import { STM32Menu } from "./menu/hw/stm32-menu";
import { CPPMenu } from "./menu/cpp-menu";
import { CircuitMenu } from "./menu/circuit-menu";
import { LinuxMenu } from "./menu/linux-menu";
import { TDetailMenu } from "./menu/td/t-detail-menu";
import { TFrameworkMenu } from "./menu/td/t-framework-menu";
import { RTOSMenu } from "./menu/hw/rtos-menu";

import mathjax3 from "markdown-it-mathjax3";
import { CSMenu } from "./menu/cs-menu";

const customElements = [
	"math",
	"maction",
	"maligngroup",
	"malignmark",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mi",
	"mlongdiv",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mscarries",
	"mscarry",
	"mscarries",
	"msgroup",
	"mstack",
	"mlongdiv",
	"msline",
	"mstack",
	"mspace",
	"msqrt",
	"msrow",
	"mstack",
	"mstack",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"semantics",
	"math",
	"mi",
	"mn",
	"mo",
	"ms",
	"mspace",
	"mtext",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"msqrt",
	"mstyle",
	"mmultiscripts",
	"mover",
	"mprescripts",
	"msub",
	"msubsup",
	"msup",
	"munder",
	"munderover",
	"none",
	"maligngroup",
	"malignmark",
	"mtable",
	"mtd",
	"mtr",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"msline",
	"msrow",
	"mstack",
	"maction",
	"semantics",
	"annotation",
	"annotation-xml",
	"mjx-container",
	"mjx-assistive-mml",
];

export default {
	markdown: {
		config: (md) => {
			md.use(mathjax3);
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
	title: "嵌入式小站",
	themeConfig: {
		aside: true,
		outline: "deep",
		outlineBadges: true,
		outlineTitle: "目录",
		lang: "zh-CN",
		logo: "/icons/index.svg",
		siteTitle: "ZerEmbedded",
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
			"/cpp/": CPPMenu,
			"/circuit/": CircuitMenu,
			"/hardware/c51/": C51Menu,
			"/hardware/stm32/": STM32Menu,
			"/hardware/esp32/": ESP32Menu,
			"/hardware/rtos/": RTOSMenu,
			"/linux/": LinuxMenu,
			"/testdev/note/": TDetailMenu,
			"/testdev/framework/": TFrameworkMenu,
			"/cs/": CSMenu,
		},
	},
	cleanUrls: true,
};
