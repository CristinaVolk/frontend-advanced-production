import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames";

import classes from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: string;
}

export const Button: FC<ButtonProps> = (props) => {
	const {children, className, theme, ...restProps} = props;
	console.log(className)
	
	return (
		<button
			className={classNames(classes.Button, {}, [className, classes[theme]])}
			{...restProps}
		>
			{children}
		</button>
	);
}