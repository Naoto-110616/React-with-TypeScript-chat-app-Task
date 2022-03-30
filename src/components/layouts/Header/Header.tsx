import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h1>chat app</h1>
			<ul>
				<li>
					<NavLink to="/Auth" activeClassName={classes.active}>
						Auth
					</NavLink>
				</li>
				<li>
					<NavLink to="/logout" activeClassName={classes.active}>
						Logout
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
