import classes from "./Form.module.css";

const Form: React.FC<{
	btnName: string;
	onSubmit: (event: React.FormEvent) => void;
}> = (props) => {
	return (
		<form onSubmit={props.onSubmit} className={classes.form}>
			<div className={classes.input}>
				<label htmlFor="email">email</label>
				<input type="text" name="" id="email" />
			</div>
			<div className={classes.input}>
				<label htmlFor="password">password</label>
				<input type="password" name="" id="password" />
			</div>
			<button>{props.btnName}</button>
		</form>
	);
};
export default Form;
