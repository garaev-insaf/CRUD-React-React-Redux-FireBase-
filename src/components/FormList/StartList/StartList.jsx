import { doc, updateDoc, deleteField, arrayRemove, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/StartList.sass"; // импорт стилей

const StartList = ({ appState }) => {
	const db = getFirestore();
	let appStateFields = null;
	if (appState) {
		appStateFields = appState.fields;
	}
	console.log(appStateFields);
	const removeElementFromArray = (index) => {
		const newArr = appState;
		appState.fields.splice(index, 1);
		return newArr.fields;
	};
	const deleteSection = (index) => {
		// const
		const asignRef = doc(db, "asignments", "5kRVLm5LrhL60huBwSb6");
		setDoc(asignRef, { fields: removeElementFromArray(index) });
	};
	return (
		<>
			{appState ? (
				<main className="startList asignment-main">
					<header>
						<div className="search">
							<img src="/images/QuestionaryFormList/icons/search.svg" alt="лупа" />
							<input type="search" placeholder="Поиск" />
						</div>
						<Link
							to={{
								pathname: "/add",
								state: { appStateFields },
							}}
							className="add-questioanary-item-button"
						>
							<img src="/images/QuestionaryFormList/icons/add_box.svg" alt="плюс" />
							<span>Новая Анкета</span>
						</Link>
					</header>
					{appState.fields.map((field, index) =>
						field.template ? (
							<section className="form-list-item reserved" key={field}>
								<div className="form-list-item__text">
									<h3>{field.content.name}</h3>
									<p>{field.content.subheader}</p>
								</div>
								<Link
									to={{
										pathname: "/createby",
										state: { field, appStateFields },
									}}
									className="copy-button"
								>
									<img src="/images/QuestionaryFormList/icons/file_copy.svg" alt="file-copy" />
								</Link>
							</section>
						) : (
							<section className="form-list-item" key={field}>
								<div className="form-list-item__text">
									<h3>{field.content.name}</h3>
									<p>{field.content.subheader}</p>
								</div>
								<div className="form-list-item__buttons-list">
									<Link
										to={{
											pathname: "/createby",
											state: { field, appStateFields },
										}}
										className="copy-button"
									>
										<img src="/images/QuestionaryFormList/icons/file_copy.svg" alt="file-copy" />
									</Link>
									<Link
										to={{
											pathname: "/up",
											state: { field, appState, index },
										}}
										className="copy-button"
									>
										<img src="/images/QuestionaryFormList/icons/edit.svg" alt="edit" />
									</Link>
									<button className="delete_outline" onClick={() => deleteSection(index)}>
										<img
											src="/images/QuestionaryFormList/icons/delete_outline.svg"
											alt="delete_outline"
										/>
									</button>
								</div>
							</section>
						)
					)}
				</main>
			) : null}
		</>
	);
};

export { StartList };
