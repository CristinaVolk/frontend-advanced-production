import React from 'react';

import {classNames} from "shared/lib/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";

import {ThemeEnum, useTheme} from "app/providers/ThemeProvider";

import IconLightTheme from '../../../shared/assets/icons/theme-light.svg'
import IconDarkTheme from '../../../shared/assets/icons/theme-dark.svg'

import classes from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(classes.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === ThemeEnum.LIGHT ? <IconLightTheme /> : <IconDarkTheme />}
		</Button>
	);
}