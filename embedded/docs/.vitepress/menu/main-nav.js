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
				text: "C指针",
				link: "/cpp/cp/data-struct1",
			},
			{
				text: "C面试题",
				link: "/cpp/cinterview/basic-interview",
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
				text: "FreeRTOS",
				link: "/hardware/freertos/freemain",
			},
			{
				text: "μC/OS",
				link: "/hardware/ucos/ucos-main",
			},
			{
				text: "FPGA",
				link: "/hardware/fpga/fpgamain",
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
