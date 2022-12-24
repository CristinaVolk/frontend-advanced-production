import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import IconLightTheme from '../../../shared/assets/icons/theme-light.svg';
import IconDarkTheme from '../../../shared/assets/icons/theme-dark.svg';

import classes from './ThemeSwitcher.module.scss';
import { ThemeEnum } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
       <Button
          theme={ButtonTheme.CLEAR}
          className={classNames(classes.ThemeSwitcher, {}, [className])}
          onClick={toggleTheme}
       >
            {theme === ThemeEnum.LIGHT ? <IconLightTheme /> : <IconDarkTheme />}
       </Button>
  );
});
