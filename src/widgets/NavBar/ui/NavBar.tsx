import React from 'react';

import {AppRoutes, RoutePaths} from "shared/config/routes";
import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

import classes from './NavBar.module.scss'

interface NavBarProps {
	className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
	return (
		<div className={classNames(classes.NavBar, {}, [className])}>
			<ThemeSwitcher />

			<div className={classes.links}>
				<AppLink
					theme={AppLinkTheme.PRIMARY}
					className={classes.mainLink}
					to={RoutePaths[AppRoutes.MAIN]}
				>Main</AppLink>
				<AppLink
					theme={AppLinkTheme.INVERTED}
					className={classes.mainLink}
					to={RoutePaths[AppRoutes.ABOUT]}
				>About</AppLink>
			</div>
		</div>
	);
}








