import Header from "./Header/Header";

const Layouts: React.FC = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	);
};
export default Layouts;
