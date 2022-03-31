import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC8Q5KeT4EoHiy8zFIuDqXU31xWdZhZTsc",
	authDomain: "react-with-typescript-chat-app.firebaseapp.com",
	projectId: "react-with-typescript-chat-app",
	storageBucket: "react-with-typescript-chat-app.appspot.com",
	messagingSenderId: "844349593131",
	appId: "1:844349593131:web:2494c420968b23898e7c6e",
});

const db = firebaseApp.firestore();

export { db };
