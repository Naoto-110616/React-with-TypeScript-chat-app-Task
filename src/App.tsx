import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
