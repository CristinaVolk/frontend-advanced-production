import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import IconLightTheme from '../../../shared/assets/icons/theme-light.svg';
import IconDarkTheme from '../../../shared/assets/icons/theme-dark.svg';

import classes from './ThemeSwitcher.module.scss';
import { ThemeEnum } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={onToggleHandler}
        >
            {theme === ThemeEnum.LIGHT ? <IconLightTheme /> : <IconDarkTheme />}
        </Button>
    );
});
