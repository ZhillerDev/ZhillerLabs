import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../store";

const MainLayout = observer(() => {
	const { websiteStore, navStore } = useStore();
	const navList = {
		embeded: websiteStore.embeded,
		ai: websiteStore.ai,
		work: websiteStore.work,
	};
	return (
		<div className="flex-1 flex-row">
			<div className="px-4 mt-4 font-bold text-lg">嵌入式常用网站</div>
			{navList[websiteStore.currentActive].map((item) => (
				<div className=" h-10 m-4 bg-white rounded-lg relative hover:shadow-md transition duration-200 ease-in-out">
					<a
						href={item.url}
						target="_blank"
						className="px-4 absolute w-full h-full top-0 left-0 flex items-center justify-start text-left"
					>
						{item.title}
					</a>
				</div>
			))}
		</div>
	);
});

export default MainLayout;
