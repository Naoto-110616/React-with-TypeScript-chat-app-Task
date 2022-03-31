import React, { useState } from "react";

type Token = string | null;

const AuthContext = React.createContext<{
	token: Token;
	isLoggedIn: boolean;
	login: (token: Token) => void;
	logout: () => void;
}>({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [token, setToken] = useState<Token>(null);

	const userIsLoggedIn = !!token;

	const loginHandler = (token) => {
		setToken(token);
	};

	const logoutHandler = () => {
		setToken(null);
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthContext;
