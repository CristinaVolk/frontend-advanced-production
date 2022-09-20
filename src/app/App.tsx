import {Link} from "react-router-dom";
import React, {Suspense} from "react";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {AppRoutes, RoutePaths} from "shared/config/routes";
import {classNames} from "shared/lib/classNames";

import './styles/index.scss'


function App() {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {dark: true}, [theme])}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Link to={RoutePaths[AppRoutes.MAIN]}>Main</Link>
				<Link to={RoutePaths[AppRoutes.ABOUT]}>About</Link>
			<AppRouter />
			</Suspense>
		</div>
	);
}

export default App;