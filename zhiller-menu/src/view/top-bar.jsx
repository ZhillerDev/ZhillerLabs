import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const TopBar = observer(() => {
	const { navStore } = useStore();
	return (
		<nav className="bg-blk-200 text-white flex justify-between items-center px-6 py-3">
			<div className="flex items-center">
				<a
					href="#"
					className="text-lg font-semibold tracking-wider"
				>
					{navStore.navBarMenu.title}
				</a>
			</div>
			<div className="flex items-center">
				<a
					href="#"
					className="text-blk-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out"
				>
					{navStore.navBarMenu.settings}
				</a>
			</div>
		</nav>
	);
});

export default TopBar;
