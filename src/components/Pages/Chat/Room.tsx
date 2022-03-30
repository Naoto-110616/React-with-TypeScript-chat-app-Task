import classes from "./Room.module.css";
import Layouts from "../../Layouts/Layouts";

const Room = () => {
	const messageHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("submitted");
	};
	return (
		<>
			<Layouts>
				<section className={classes.room}>
					<form onSubmit={messageHandler}>
						<input type="textarea" />
						<button>submit</button>
					</form>
				</section>
			</Layouts>
		</>
	);
};
export default Room;
