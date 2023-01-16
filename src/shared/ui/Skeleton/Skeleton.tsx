import React, { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { className, width, height, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            style={styles}
            className={classNames(classes.Skeleton, {}, [className])}
        />
    );
};
