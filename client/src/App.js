import "./App.css";
import { init, subscribe } from './socketApi'
import { useEffect, useState } from 'react'
import Palatte from "./components/Palatte";

function App() {
	const [activeColor, setActiveColor] = useState('#000')
	useEffect(() => {
		init();
		subscribe((color) => {
			setActiveColor(color);
		});
	}, [])


	return (
		<div className="App" style={{ backgroundColor: activeColor }}>
			<h1> {activeColor} </h1>
			<Palatte activeColor={activeColor} />
		</div>
	);
}

export default App;
