import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvXmex4uO1Yht9WzsOsdHCuFWD625YTsw",
  authDomain: "asignment-test-app.firebaseapp.com",
  databaseURL: "https://asignment-test-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asignment-test-app",
  storageBucket: "asignment-test-app.appspot.com",
  messagingSenderId: "1079475947821",
  appId: "1:1079475947821:web:ffaecbf971abe95a9deba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
