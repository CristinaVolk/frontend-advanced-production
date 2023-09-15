import React, { memo } from 'react';
import classes from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { HStack } from '../../redesigned/Stack';
import AppSvg from '@/shared/assets/icons/tim-avatar.svg';

interface AppLogoProps {
    className?: string;
}

/**
 * @deprecated
 */
export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(classes.appLogoWrapper, {}, [className])}
        >
            <div className={classes.gradientBig} />
            <div className={classes.gradientSmall} />
            <AppSvg className={classes.appLogo} />
        </HStack>
    );
});
