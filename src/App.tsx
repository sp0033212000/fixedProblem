import React, { useEffect, useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let initTimes = 0;

function App() {
	const [innerHeight, setInnerHeight] = useState<number>(0);
	const [VH, setVH] = useState<string>("");

	async function initWindowSize() {
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		document.documentElement.style.setProperty("--vw", `${vw}px`);
		setInnerHeight(window.innerHeight);
		setVH(document.documentElement.style.getPropertyValue("--vh"));
		await sleep(1000);

		if (initTimes <= 5) {
			initTimes++;
			initWindowSize();
		} else {
			initTimes = 0;
		}
	}

	useEffect(() => {
		initWindowSize();
		window.addEventListener("orientationchange", initWindowSize);

		return () => {
			window.removeEventListener("orientationchange", initWindowSize);
		};
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{/* <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p> */}
			<div
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 99999,
					fontWeight: 700,
					fontSize: "2rem",
					color: "orange",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "red",
					height: "calc( var(--vh) * 45 )",
					width: "50vw",
				}}
			>
				<p>InnerHeight: {innerHeight}</p>
				<p>VH: {VH}</p>
				<button
					onClick={() => {
						setInnerHeight(window.innerHeight);
						setVH(document.documentElement.style.getPropertyValue("--vh"));
					}}
				>
					get new height value
				</button>
				<a
					className="App-link"
					href="/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click to open new tab
				</a>
			</div>
			{/* </header> */}
			{/* </div> */}
		</>
	);
}

export default App;
