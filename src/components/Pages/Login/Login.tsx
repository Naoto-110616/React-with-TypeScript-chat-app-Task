import Layouts from "../../Layouts/Layouts";

import AuthForm from "../../UI/AuthForm/AuthForm";

const Login = () => {
	return (
		<>
			<Layouts>
				<h2>Login</h2>
				<AuthForm btnName={"Login"} />
			</Layouts>
		</>
	);
};
export default Login;
