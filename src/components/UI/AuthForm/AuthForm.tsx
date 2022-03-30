import React, { useRef, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import classes from "./AuthForm.module.css";

const AuthForm: React.FC = () => {
	const [isLogin, setIsLogin] = useState(true);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredEmail: string = emailInputRef.current!.value;
		const enteredPassword: string = passwordInputRef.current!.value;
		let url: string;
		if (isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8Q5KeT4EoHiy8zFIuDqXU31xWdZhZTsc";
		} else {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8Q5KeT4EoHiy8zFIuDqXU31xWdZhZTsc";
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			if (res.ok) {
			} else {
				return res.json().then((data) => {
					console.log(data);
				});
			}
		});
	};
	return (
		<>
			<h2>{isLogin ? "Login" : "SignUp"}</h2>
			<form onSubmit={submitHandler} className={classes.form}>
				<div className={classes.input}>
					<label htmlFor="email">email</label>
					<input
						type="text"
						name="email"
						id="email"
						required
						ref={emailInputRef}
					/>
				</div>
				<div className={classes.input}>
					<label htmlFor="password">password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<button>{isLogin ? "Login" : "SignUp"}</button>
				<button type="button" onClick={switchAuthModeHandler}>
					switch
				</button>
			</form>
		</>
	);
};
export default AuthForm;
