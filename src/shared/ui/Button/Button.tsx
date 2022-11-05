import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { classNames, Modes } from 'shared/lib/classNames';
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

export enum ButtonTextColor {
  RED = 'red',
  BLACK = 'black',
  WHITE = 'white'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    textColor?: string;
    children: ReactNode
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    className,
    theme,
    square,
    size = ButtonSize.M,
    disabled,
    textColor = '',
    ...restProps
  } = props;

  const modes: Modes = {
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
           [
             className,
             classes[theme],
             classes[size],
             classes[textColor],
           ],
         )
       }
          disabled={disabled}
          {...restProps}
       >
            {children}
       </button>
  );
};
