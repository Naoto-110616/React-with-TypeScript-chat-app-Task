import Layouts from "../../Layouts/Layouts";

import Form from "../../UI/Form/Form";

const SignUp = () => {
	const signUpHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("submitted");
	};
	return (
		<>
			<Layouts>
				<h2>SignUp</h2>
				<Form onSubmit={signUpHandler} btnName={"SignUp"} />
			</Layouts>
		</>
	);
};
export default SignUp;
