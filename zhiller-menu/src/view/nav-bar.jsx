import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../store";

const NavBar = observer(() => {
	const { navStore } = useStore();
	return (
		<React.Fragment>
			<div class="flex flex-col h-screen w-64 bg-blk-150 pt-5">
				<div class="mt-0">
					<a
						href="#"
						class="flex items-center my-1 mx-3 py-2 px-2 rounded-md text-white hover:bg-blue-400 transition duration-200 ease-in-out mb-4"
					>
						<span class="mx-4">Dashboard</span>
					</a>
					<a
						href="#"
						class="flex items-center my-1 mx-3 py-2 px-2 rounded-md text-white hover:bg-blue-400 transition duration-200 ease-in-out"
					>
						<span class="mx-4">Products</span>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
});

export default NavBar;
