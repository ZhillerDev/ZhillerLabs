export const MainNav = [
	{
		text: "首页",
		link: "/",
	},
	{
		text: "电路基础",
		link: "/circuit/serial",
		activeMatch: "/circuit/",
	},
	{
		text: "C/C++",
		items: [
			{
				text: "Cpp",
				link: "/cpp/cp/data-struct1",
			},
			{
				text: "C指针",
				link: "/cpp/cp/data-struct1",
			},
		],
		activeMatch: "/cpp/",
	},
	{
		text: "硬件",
		items: [
			{
				text: "C51单片机",
				link: "/hardware/c51/c51main",
			},
			{
				text: "STM32",
				link: "/hardware/stm32/stm32main",
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
				text: "RT-Thread",
				link: "/hardware/rtthead/rtmain",
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
		],
		activeMatch: "/interview/",
	},
];
