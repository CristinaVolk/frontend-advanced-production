import React, { memo } from 'react';
import classes from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames';
import AppSvg from '@/shared/assets/icons/tim-avatar.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(classes.appLogoWrapper, {}, [className])}
        >
            <div className={classes.gradientBig} />
            <div className={classes.gradientSmall} />
            <AppSvg
                className={classes.appLogo}
                width={size}
                height={size}
                color="black"
            />
        </HStack>
    );
});
