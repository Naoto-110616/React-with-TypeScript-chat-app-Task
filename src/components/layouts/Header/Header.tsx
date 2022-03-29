import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h1>chat app</h1>
			<ul>
				<li>
					<Link to="/login">login</Link>
				</li>
				<li>
					<Link to="/logout">logout</Link>
				</li>
				<li>
					<Link to="/signUp">signUp</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
