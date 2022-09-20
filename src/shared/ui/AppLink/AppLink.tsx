import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";

import {classNames} from "shared/lib/classNames";

import classes from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		children,
		to,
		className,
		theme,
		...restProps
	} = props;

	return (
		<Link
			{...restProps}
			to={to}
			className={classNames(classes.appLink, {}, [className, classes[theme]])}
		>
			{children}
		</Link>
	);
}