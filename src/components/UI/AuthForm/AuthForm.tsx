import React, { useRef, useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm: React.FC<{ btnName: string }> = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current!.value;
		const enteredPassword = passwordInputRef.current!.value;
		if (isLogin) {
			console.log("submitted");
		} else {
			fetch(
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8Q5KeT4EoHiy8zFIuDqXU31xWdZhZTsc",
				{
					method: "POST",
					body: JSON.stringify({
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((res) => {
				if (res.ok) {
				} else {
					return res.json().then((data) => {
						console.log(data);
					});
				}
			});
		}
	};
	return (
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
			<button>{props.btnName}</button>
		</form>
	);
};
export default AuthForm;
