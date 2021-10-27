import * as React from "react";
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { Link, useLocation, useHistory } from "react-router-dom";

const Update = () => {
	const history = useHistory();
	const db = getFirestore();
	const location = useLocation();
	const { field } = location.state; // содержимое анкеты
	const { index } = location.state; // индекс анкеты
	const { appState } = location.state;
	const [flag, setFlag] = useState(true);
	console.log(field);
	console.log(appState);
	const [addFormState, setAddFormState] = useState(field);
	useEffect(() => {
		if (flag) {
			setAddFormState({
				...addFormState,
				template: false,
			});
			setAddFormState({
				...addFormState,
				content: {
					...addFormState.content,
					subheader: String(new Date()),
				},
			});
			setFlag(false);
		}
	}, []);
	const addBlock = () => {
		setAddFormState({
			...addFormState,
			content: {
				...addFormState.content,
				data: [
					...addFormState.content.data,
					{
						fields: [""],
						title: "",
					},
				],
			},
		});
	};

	function handleChangeName(event) {
		// for name and subheaders
		const { value } = event.target;
		setAddFormState({
			...addFormState,
			content: {
				...addFormState.content,
				name: value,
			},
		});
	}

	const handleChange = (event, fieldIndex, dataIndex) => {
		const { value } = event.target;
		console.log(value);
		setAddFormState({
			...addFormState,
			content: {
				...addFormState.content,
				data: addFormState.content.data.map((item, index) =>
					index == dataIndex
						? {
								...item,
								fields: item.fields.map((secondItem, secondIndex) =>
									secondIndex == fieldIndex ? value : secondItem
								),
						  }
						: item
				),
			},
		});
	};

	const handleChangeTitle = (event, dataIndex) => {
		const { value } = event.target;
		setAddFormState({
			...addFormState,
			content: {
				...addFormState.content,
				data: addFormState.content.data.map((item, index) =>
					index == dataIndex
						? {
								...item,
								title: value,
						  }
						: item
				),
			},
		});
	};

	const saveChanges = () => {
		const asignRef = doc(db, "asignments", "5kRVLm5LrhL60huBwSb6");
		setDoc(asignRef, {
			...appState,
			fields: appState.fields.map((item, i) => (i == index ? addFormState : item)),
		});
		history.push("/");
	};
	console.log(addFormState);
	return (
		<>
			{addFormState ? (
				<main className="add-new-item asignment-main">
					<header>
						<div className="left-side">
							<Link to="/" className="back-button">
								<img src="/images/QuestionaryFormList/icons/arrow_back.svg" alt="arrow_back" />
							</Link>
							<h1>Новая анкета поставщика</h1>
						</div>
						<div className="right-side">
							<button className="save-button" onClick={() => saveChanges()}>
								Сохранить
							</button>
							<button className="more-button">
								<img src="/images/QuestionaryFormList/icons/more_horiz.svg" alt="more" />
							</button>
						</div>
					</header>
					<section className="company-name">
						<h2>
							<input
								type="text"
								placeholder="Название анкеты"
								value={addFormState.content.name}
								onChange={handleChangeName}
							/>
						</h2>
					</section>
					{addFormState.content.data.map((item, dataIndex) => (
						<section className="datas-form company-datas" key={item}>
							<header className="datas-form__header">
								<div className="title">
									<h2>
										<input
											type="text"
											placeholder="Название раздела"
											value={item.title}
											onChange={(e) => handleChangeTitle(e, dataIndex)}
										/>
									</h2>
								</div>
								<div className="actions">
									<button className="copy-button">
										<img src="/images/QuestionaryFormList/icons/file_copy.svg" alt="file-copy" />
									</button>
									<button className="delete_outline-button">
										<img
											src="/images/QuestionaryFormList/icons/delete_outline.svg"
											alt="delete_outline"
										/>
									</button>
								</div>
							</header>
							{item.fields.map((field, fieldIndex) => (
								<div className="datas-form__item">
									<button className="info-button">
										<img src="/images/QuestionaryFormList/icons/info.svg" alt="info" />
									</button>
									<input
										type="text"
										name="fields"
										placeholder="Название поля"
										value={field}
										onChange={(e) => handleChange(e, fieldIndex, dataIndex)}
									/>
									<button className="close-button">
										<img src="/images/QuestionaryFormList/icons/close.svg" alt="close" />
									</button>
									<button className="delete_outline-button">
										<img
											src="/images/QuestionaryFormList/icons/delete_outline.svg"
											alt="delete_outline"
										/>
									</button>
								</div>
							))}
							<footer className="datas-form__footer">
								<button className="add-field-button">
									<img src="/images/QuestionaryFormList/icons/add_circle_outline.svg" alt="add" />
									<span>Добавить ещё поле</span>
								</button>
							</footer>
						</section>
					))}
					<footer className="add-block">
						<button className="add-block__button" onClick={() => addBlock()}>
							<img src="/images/QuestionaryFormList/icons/add_circle_outline.svg" alt="add" />
							<span>Добавить ещё раздел</span>
						</button>
					</footer>
				</main>
			) : null}
		</>
	);
};

export { Update };
