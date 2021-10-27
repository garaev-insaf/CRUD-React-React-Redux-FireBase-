import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

import { Navbar } from "../universal/Navbar/Navbar";
import { Sidebar } from "../universal/Sidebar/Sidebar";
import { AddNewItem } from "./AddNewItem/AddNewItem";
import { StartList } from "./StartList/StartList";
import "./styles/QuestionaryFormList.sass"; // импорт стилей
import { useEffect, useState } from "react/cjs/react.development";
import { CreateBy } from "./CreateBy/CreateBy";
import { Update } from "./Update/Update";

const QuestionaryFormList = () => {
	const [dataBaseState, setDataBaseState] = useState(null);
	const db = getFirestore();
	// getDataBase
	useEffect(() => {
		const unsubscribe = onSnapshot(doc(db, "asignments", "5kRVLm5LrhL60huBwSb6"), (doc) => {
			setDataBaseState([doc.data()][0]);
		});
		//remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
		return () => unsubscribe();
	}, []);
	console.log(dataBaseState);
	return (
		<div className="QuestionaryFormList">
			<Navbar />
			<Sidebar />
			<Router>
				<Switch>
					<Route exact path="/">
						<StartList appState={dataBaseState} db={db} />
					</Route>
					<Route path="/add">
						<AddNewItem />
					</Route>
					<Route path="/up">
						<Update />
					</Route>
					<Route path="/createby" render={() => <CreateBy />}></Route>
				</Switch>
			</Router>
		</div>
	);
};

export { QuestionaryFormList };
