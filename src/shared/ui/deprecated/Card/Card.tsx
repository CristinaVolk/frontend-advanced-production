import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

/**
 * deprecated
 */
export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(classes.Card, { [classes.max]: max }, [
                className,
                classes[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
