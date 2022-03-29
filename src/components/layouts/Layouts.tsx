import Header from "./Header/Header";

const Layouts: React.FC = (props) => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};
export default Layouts;
