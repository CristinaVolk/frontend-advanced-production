import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: string;
}

export enum ThemeButton {
	CLEAR = 'clear'
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children, className, theme, ...restProps
  } = props;

  return (
       <button
          type="button"
          className={classNames(classes.Button, {}, [className, classes[theme]])}
          {...restProps}
       >
            {children}
       </button>
  );
};
