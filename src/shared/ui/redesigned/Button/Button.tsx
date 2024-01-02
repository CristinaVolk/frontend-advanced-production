import React, {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';

import { classNames, Modes } from '@/shared/lib/classNames';
import classes from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

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
     * Color of the button according to the design system
     */
    color?: ButtonColor;
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

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            className,
            variant = 'outline',
            square,
            size = 'm',
            color = 'normal',
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
                    classes[color],
                ])}
                disabled={disabled}
                {...restProps}
                ref={ref}
            >
                <div className={classes.addonLeft}>{addonLeft}</div>

                {children}
                <div className={classes.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
