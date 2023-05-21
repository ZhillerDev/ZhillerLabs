import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import TopBar from "./view/top-bar";
import NavBar from "./view/nav-bar";
import MainLayout from "./view/main-layout";

function App() {
	return (
		<>
			<TopBar />
			<div className="flex flex-row justify-between">
				<NavBar />
				<MainLayout />
			</div>
		</>
	);
}

export default App;
