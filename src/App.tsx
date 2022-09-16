import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss'


function App() {

const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Link to={'/'}>Main</Link>
				<Link to={'/about'}>About</Link>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>

		</div>
	);
}

export default App;