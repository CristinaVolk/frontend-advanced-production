import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

type headerTageType = 'h1' | 'h2' | 'h6';

const mapSizeToHeaderTage: Record<TextSize, headerTageType> = {
    [TextSize.S]: 'h6',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

/**
 * @deprecated
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTage[size];

    return (
        <div
            className={classNames(classes.Text, {}, [
                className,
                classes[theme],
                classes[align],
                classes[size],
            ])}
        >
            {title && (
                <HeaderTag
                    className={classes.title}
                    data-testid={`${dataTestId}Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classes.text}
                    data-testid={`${dataTestId}Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
