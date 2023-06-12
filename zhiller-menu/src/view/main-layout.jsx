import { observer } from "mobx-react-lite";
import { React, useState } from "react";
import { useStore } from "../store";
import { action } from "mobx";

import "../styles/main.css";
import { CSSTransition } from "react-transition-group";

const MainLayout = observer(() => {
	const [show, setShow] = useState(true);
	const { websiteStore, navStore } = useStore();
	const navList = {
		linux: websiteStore.linux,
		embeded: websiteStore.embeded,
		ai: websiteStore.ai,
		work: websiteStore.work,
	};
	return (
		<CSSTransition
			in={show}
			timeout={1000}
			classNames="fade"
			unmountOnExit
			onEntered={() => setShow(false)}
			onExited={() => setShow(true)}
		>
			<div
				className="flex-1 flex-row"
				style={{}}
			>
				<div className="px-4 mt-4 font-bold text-lg">
					{websiteStore.currentActive}

					<span
						className=" absolute right-4 font-normal bg-sky-300 px-3 py-1 text-sm rounded text-white hover:bg-sky-500 transition-all cursor-pointer select-none"
						onClick={action((e) => {
							navStore.twoColumns = !navStore.twoColumns;
						})}
					>
						{navStore.twoColumns ? "双列展示" : "单列展示"}
					</span>
				</div>
				<div className={navStore.twoColumns ? "grid grid-cols-2 mt-4" : "mt-4"}>
					{navList[websiteStore.currentActive].map((item) => (
						<div className="h-10 mb-4 mr-4 bg-white rounded-lg relative hover:shadow-md transition duration-200 ease-in-out">
							<a
								href={item.url}
								target="_blank"
								className="px-4 absolute w-full h-full top-0 left-0 flex items-center justify-start text-left text-ellipsis whitespace-nowrap overflow-hidden"
							>
								{item.title}
							</a>
						</div>
					))}
				</div>
			</div>
		</CSSTransition>
	);
});

export default MainLayout;
