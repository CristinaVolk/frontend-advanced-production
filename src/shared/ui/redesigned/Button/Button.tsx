import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { classNames, Modes } from '@/shared/lib/classNames';
import classes from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Button theme. Responsible for visual efffect (having a border, without styles)
     */
    variant?: ButtonVariant;
    /**
     * Flag responsible for the form of the button
     */
    square?: boolean;
    /**
     * Size of the button according to the design system
     */
    size?: ButtonSize;
    /**
     * Flag responsible for button activating
     */
    disabled?: boolean;
    /**
     * Button content
     */
    children: ReactNode;
    /**
     * Expands the button to the full width
     */
    fullWidth?: boolean;

    addonRight?: ReactNode;
    addonLeft?: ReactNode;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        fullWidth,
        addonRight,
        addonLeft,
        ...restProps
    } = props;

    const modes: Modes = {
        [classes.square]: square,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
        [classes.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(classes.Button, modes, [
                className,
                classes[variant],
                classes[size],
            ])}
            disabled={disabled}
            {...restProps}
        >
            <div className={classes.addonLeft}>{addonLeft}</div>

            {children}
            <div className={classes.addonRight}>{addonRight}</div>
        </button>
    );
};
