import { useEffect, useState } from "react";

import classes from "./Room.module.css";

import Layouts from "../../Layouts/Layouts";
import SendMessage from "../../UI/SendMessage/SendMessage";
import { db } from "../../firebase";

const Room = () => {
	type Message = {
		text: string;
		createdAt: Date;
	};
	const [messages, setMessages] = useState<Message[]>();
	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data() as Message));
			});
	}, []);
	return (
		<>
			<Layouts>
				<section className={classes.room}>
					{console.log(messages)}
					<div className="messages">
						{messages?.map(({ text }) => (
							<div>
								<div>
									<p>{text}</p>
								</div>
							</div>
						))}
					</div>
					<SendMessage />
				</section>
			</Layouts>
		</>
	);
};
export default Room;
