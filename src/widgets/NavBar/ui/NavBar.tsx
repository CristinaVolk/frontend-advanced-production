import React from 'react';

import {AppRoutes, RoutePaths} from "shared/config/routes";
import {classNames} from "shared/lib/classNames";
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

import classes from './NavBar.module.scss'


interface NavBarProps {
	className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
	return (
		<div className={classNames(classes.navbar, {}, [className])}>
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








