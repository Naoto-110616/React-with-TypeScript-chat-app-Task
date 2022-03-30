import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import Auth from "./components/Pages/Auth/Auth";
import Room from "./components/Pages/Chat/Room";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Redirect to="/Auth" />
				</Route>
				<Route path="/Auth">
					<Auth />
				</Route>
				<Route path="/room">
					<Room />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
