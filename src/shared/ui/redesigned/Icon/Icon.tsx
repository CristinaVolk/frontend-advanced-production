import React from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Icon.module.scss';

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface ClickAvailableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

interface ClickNotAvailableIconProps extends IconBaseProps {
    clickable?: false;
}

type IconProps = ClickAvailableIconProps | ClickNotAvailableIconProps;

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...restProps
    } = props;

    const icon = (
        <Svg
            className={classNames(classes.Icon, {}, [className])}
            width={width}
            height={height}
            {...restProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        const { onClick } = props;
        return (
            <button
                type="button"
                className={classes.button}
                onClick={onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
};
