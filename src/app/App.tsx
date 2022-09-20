import React, {Suspense} from "react";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames";

import {NavBar} from "widgets/NavBar";

import './styles/index.scss'


function App() {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {dark: true}, [theme])}>
			<NavBar />
			<button onClick={toggleTheme}>Change Theme</button>
			<Suspense fallback={<h1>Loading...</h1>}>
			<AppRouter />
			</Suspense>
		</div>
	);
}

export default App;