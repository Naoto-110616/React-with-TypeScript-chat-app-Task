import { useContext } from "react";

import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../store/auth-context";

const Header: React.FC = () => {
	const authCtx = useContext(AuthContext);

	const isLoggedIn = authCtx.isLoggedIn;
	return (
		<header className={classes.header}>
			<h1>chat app</h1>
			<ul>
				{!isLoggedIn && (
					<li>
						<NavLink to="/Auth" activeClassName={classes.active}>
							Auth
						</NavLink>
					</li>
				)}
				{isLoggedIn && (
					<li>
						<NavLink to="/logout" activeClassName={classes.active}>
							Logout
						</NavLink>
					</li>
				)}
			</ul>
		</header>
	);
};

export default Header;
