import React from "react";
import "./styles/Sidebar.sass"; // импорт стилей

const Sidebar = () => {
	return (
		<aside id="sidebar" className="sidebar">
			<ul className="sidebar-links">
				<li className="sidebar-item poll">
					<h2>
						<img src="/images/universal/Sidebar/icons/poll.svg" alt="poll" />
						<span>Тендеры</span>
					</h2>
				</li>
				<li className="sidebar-item people">
					<h2 >
						<img src="/images/universal/Sidebar/icons/people.svg" alt="people" />
						<span>Контрагенты</span>
					</h2>
				</li>
				<li className="sidebar-item store_mall_directory">
					<h2 >
						<img
							src="/images/universal/Sidebar/icons/store_mall_directory.svg"
							alt="store-mall-directory"
						/>
						<span>Пользователи</span>
					</h2>
				</li>
				<li className="sidebar-item assignment">
					<h2>
						<img src="/images/universal/Sidebar/icons/assignment.svg" alt="assignment" />
						<span>Анкеты</span>
					</h2>
				</li>
			</ul>
		</aside>
	);
};

export { Sidebar };
