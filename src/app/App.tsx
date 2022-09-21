import React, {Suspense} from "react";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";

import {classNames} from "shared/lib/classNames";
import './styles/index.scss'


function App() {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {dark: true}, [theme])}>
			<Suspense fallback={''}>
				<NavBar />
				<div className={'content-page'}>
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}

export default App;