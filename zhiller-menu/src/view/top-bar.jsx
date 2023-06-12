import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { action } from "mobx";

const TopBar = observer(() => {
	const { navStore, websiteStore } = useStore();
	return (
		<nav className="bg-blk-200 text-gray-600 flex justify-between items-center px-6 py-3">
			<div className="flex items-center">
				<a
					href="#"
					className="text-lg font-semibold tracking-wider"
				>
					{navStore.topBarMenu.title}
				</a>
			</div>
			<div className="flex items-center">
				<a
					href="#"
					className="text-blk-50 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out"
				>
					{navStore.topBarMenu.settings}
				</a>
			</div>
		</nav>
	);
});

export default TopBar;
