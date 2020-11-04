import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://sp0033212000.github.io/fixedProblem"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click me to open new tab
				</a>
			</header>
			<button>Button</button>
		</div>
	);
}

export default App;
