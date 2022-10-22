import React, { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  ROUNDED = 'rounded',
  CREATIVE = 'creative',
  BACKGROUND = 'background',
  INVERTED_BACKGROUND = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    square,
    size,
    disabled,
    ...restProps
  } = props;

  const modes: Record<string, boolean> = {
    [classes.square]: square,
    [classes.disabled]: disabled,
  };

  return (
       <button
          type="button"
          className={
         classNames(
           classes.Button,
           modes,
           [className, classes[theme], classes[size]],
         )
       }
          disabled={disabled}
          {...restProps}
       >
            {children}
       </button>
  );
};
