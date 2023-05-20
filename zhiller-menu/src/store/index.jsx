import { createContext, Context, useContext } from "react";
import navStore from "./nav-store";

// 在此处注册我们的子容器
const store = {
	navStore: navStore(),
};

// 创建上下文，封装总容器
export const StoreContext = createContext(store);
export const useStore = () => {
	return useContext(StoreContext);
};

// 别忘了导出
export default store;
