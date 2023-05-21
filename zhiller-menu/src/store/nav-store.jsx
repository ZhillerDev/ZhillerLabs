import { makeAutoObservable } from "mobx";

// 下文创建了一个简单的计数器容器
// 1. 监听数据为count，初始值为0
// 2. 定义两个acitons，用于增减count
const navStore = () => {
	return makeAutoObservable({
		count: 100,
		topBarMenu: {
			title: "Zhiller简单导航页",
			settings: "额外设置",
		},
		navList: [
			{
				labelName: "嵌入式",
				tagName: "embeded",
			},
			{
				labelName: "AI",
				tagName: "ai",
			},
			{
				labelName: "校招",
				tagName: "work",
			},
		],
	});
};

export default navStore;
