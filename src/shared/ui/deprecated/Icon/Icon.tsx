import React from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    inverted?: boolean;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

/**
 * deprecated
 */
export const Icon = (props: IconProps) => {
    const { className, Svg, inverted, ...restProps } = props;
    return (
        <Svg
            className={classNames(
                inverted ? classes.inverted : classes.Icon,
                {},
                [className],
            )}
            {...restProps}
        />
    );
};
