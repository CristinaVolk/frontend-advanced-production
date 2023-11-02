import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPaddings = '0' | '8' | '16' | '24';
export type CardBorder = 'smooth' | 'round';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    cardPaddings?: CardPaddings;
    border?: CardBorder;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        cardPaddings = '8',
        border = 'normal',
        ...otherProps
    } = props;

    const modes: Record<string, boolean | undefined> = {
        [classes.max]: max,
    };
    const mapPaddingToClass: Record<CardPaddings, string> = {
        '0': 'gap_0',
        '8': 'gap_8',
        '16': 'gap_16',
        '24': 'gap_24',
    };

    return (
        <div
            className={classNames(classes.Card, modes, [
                className,
                classes[variant],
                classes[border],
                classes[mapPaddingToClass[cardPaddings]],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
