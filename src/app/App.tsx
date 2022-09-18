import {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";
import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import './styles/index.scss'


function App() {

	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {dark: true}, [theme])}>
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