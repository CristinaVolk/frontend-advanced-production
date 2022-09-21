import React from "react";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";

import './styles/index.scss'


function App() {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {dark: true}, [theme])}>
			<NavBar />
			<div className={'content-page'}>
				<SideBar />
				<AppRouter />
			</div>
		</div>
	);
}

export default App;