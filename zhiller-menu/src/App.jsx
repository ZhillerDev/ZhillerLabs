import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import TopBar from "./view/top-bar";
import NavBar from "./view/nav-bar";

function App() {
	return (
		<>
			<TopBar />
			<NavBar />
		</>
	);
}

export default App;
