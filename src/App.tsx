import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import Room from "./components/Pages/Chat/Room";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Redirect to="/login" />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/room">
					<Room />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
