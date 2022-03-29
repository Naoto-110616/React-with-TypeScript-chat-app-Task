import Header from "./Header/Header";

const Layouts: React.FC = (props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};
export default Layouts;
