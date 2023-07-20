export const MainNav = [
	{
		text: "首页",
		link: "/",
	},
	{
		text: "计算机通识",
		link: "/cs/cs-main",
		activeMatch: "/cs/",
	},
	{
		text: "电路",
		link: "/circuit/serial",
		activeMatch: "/circuit/",
	},
	{
		text: "C",
		items: [
			{
				text: "Cpp",
				link: "/cpp/cp/data-struct1",
			},
			{
				text: "STL",
				link: "/cpp/stl/container",
			},
		],
		activeMatch: "/cpp/",
	},
	{
		text: "硬件",
		items: [
			{
				text: "8051",
				link: "/hardware/c51/c51main",
			},
			{
				text: "STM32",
				link: "/hardware/stm32/stm-tech",
			},
			{
				text: "ESP32",
				link: "/hardware/esp32/esp32main",
			},
			{
				text: "RTOS",
				link: "/hardware/rtos/rtosmain",
			},
		],
		activeMatch: "/hardware/",
	},
	{
		text: "Linux",
		items: [
			{
				text: "阅读笔记",
				link: "/linux/book/linuxc",
			},
			{
				text: "Docker",
				link: "/linux/docker/basic",
			},
			{
				text: "Multimedia",
				link: "/linux/multimedia/media-basic",
			},
			{
				text: "Qt",
				link: "/linux/qt/qt-basic",
			},
		],
		activeMatch: "/linux/",
	},
	{
		text: "测开",
		items: [
			{
				text: "测开笔记",
				link: "/testdev/note/softtest",
			},
			{
				text: "框架分析",
				link: "/testdev/framework/docker/basic",
			},
		],
		activeMatch: "/testdev/",
	},
];
