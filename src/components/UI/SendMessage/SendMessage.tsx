import { useState } from "react";

import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const SendMessage = () => {
	const [message, setMessage] = useState<string>("");

	const sendMessage = (event: React.FormEvent) => {
		event.preventDefault();

		db.collection("messages").add({
			text: message,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMessage("");
	};
	return (
		<div>
			<form onSubmit={sendMessage}>
				<div className="sendMessage">
					<input
						type="text"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
				</div>
			</form>
		</div>
	);
};

export default SendMessage;
