import classes from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h1>chat app</h1>
			<ul>
				<li>login</li>
				<li>logout</li>
				<li>signUp</li>
			</ul>
		</header>
	);
};

export default Header;
