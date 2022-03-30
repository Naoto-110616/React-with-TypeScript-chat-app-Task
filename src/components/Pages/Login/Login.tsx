import Layouts from "../../Layouts/Layouts";

import Form from "../../UI/Form/Form";

const Login = () => {
	const loginHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("submitted");
	};
	return (
		<>
			<Layouts>
				<h2>Login</h2>
				<Form onSubmit={loginHandler} btnName={"Login"} />
			</Layouts>
		</>
	);
};
export default Login;
