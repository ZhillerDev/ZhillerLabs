import { makeAutoObservable } from "mobx";

const websiteStore = () => {
	return makeAutoObservable({
		currentActive: "embeded",
		changeMenu(menu) {
			this.currentActive = menu;
		},
		embeded: [
			{
				title: "电子发烧友",
				url: "https://www.elecfans.com/",
			},
			{
				title: "立创EDA开源广场",
				url: "https://oshwhub.com/",
			},
			{
				title: "CSDN",
				url: "https://www.csdn.net/",
			},
			{
				title: "半岛小芯",
				url: "http://www.semiee.com/",
			},
		],
		ai: [
			{
				title: "Google",
				url: "https://www.google.com/index.html",
			},
			{
				title: "ChatGPT官网",
				url: "https://chat.openai.com/auth/login",
			},
			{
				title: "Poe",
				url: "https://poe.com/",
			},
		],
		work: [
			{
				title: "牛客",
				url: "https://www.nowcoder.com/?fromPut=b2c_navigation",
			},
			{
				title: "美团招聘",
				url: "https://zhaopin.meituan.com/web/campus",
			},
			{
				title: "大疆招聘",
				url: "https://we.dji.com/zh-CN/campus/position?from=home_page&top_cta=undefined&category=1_101_102_103_104_105_106_107_108_109_110_111_112_113_114_115_116_117&page=1",
			},
			{
				title: "蔚来校招",
				url: "https://nio.jobs.feishu.cn/campus/?keywords=&category=&location=&project=&type=&job_hot_flag=&current=1&limit=10&functionCategory=&tag=",
			},
			{
				title: "文远知行校招",
				url: "https://app.mokahr.com/campus_apply/jingchi/2137#/jobs",
			},
			{
				title: "迪子",
				url: "http://job.byd.com/zpweb/zpweb/planList.do",
			},
			{
				title: "比特大陆校招",
				url: "https://jobs.bitmain.com.cn/students",
			},
		],
	});
};

export default websiteStore;
