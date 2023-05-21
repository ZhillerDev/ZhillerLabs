import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../store";
import { action } from "mobx";

const NavBar = observer(() => {
	const { websiteStore, navStore } = useStore();
	return (
		<React.Fragment>
			<div className="flex flex-col h-screen w-64 bg-blk-150 pt-5">
				<div className="mt-0">
					{navStore.navList.map((item) =>
						websiteStore.currentActive == item.tagName ? (
							<div
								onClick={action((e) => {
									websiteStore.changeMenu(item.tagName);
								})}
								className="cursor-pointer flex items-center my-1 mx-3 py-2 px-2 rounded-md bg-blue-400 text-gray-100 hover:bg-blue-400 hover:text-gray-100 transition duration-200 ease-in-out mb-4"
							>
								<span className="mx-4">{item.labelName}</span>
							</div>
						) : (
							<div
								onClick={action((e) => {
									websiteStore.changeMenu(item.tagName);
								})}
								className="cursor-pointer flex items-center my-1 mx-3 py-2 px-2 rounded-md text-gray-500 hover:bg-blue-400 hover:text-gray-100 transition duration-200 ease-in-out mb-4"
							>
								<span className="mx-4">{item.labelName}</span>
							</div>
						)
					)}
				</div>
			</div>
		</React.Fragment>
	);
});

export default NavBar;
