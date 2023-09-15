import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextSize = 's' | 'm' | 'l';

export type TextAlign = 'left' | 'right' | 'center';

type headerTagType = 'h1' | 'h2' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, headerTagType> = {
    s: 'h6',
    m: 'h2',
    l: 'h1',
};

const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'center',
        size = 'm',
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [
        className,
        classes[variant],
        classes[align],
        sizeClass,
    ];

    return (
        <div className={classNames(classes.Text, {}, additionalClasses)}>
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
