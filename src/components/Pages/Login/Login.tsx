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
				<Form onSubmit={loginHandler} btnName={"login"} />
			</Layouts>
		</>
	);
};
export default Login;
