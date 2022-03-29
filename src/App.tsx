import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import Login from "./components/Pages/Login/Login";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
