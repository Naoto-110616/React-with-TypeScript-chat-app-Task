import Layouts from "../../Layouts/Layouts";

import AuthForm from "../../UI/AuthForm/AuthForm";

const SignUp = () => {
	return (
		<>
			<Layouts>
				<h2>SignUp</h2>
				<AuthForm btnName={"SignUp"} />
			</Layouts>
		</>
	);
};
export default SignUp;
