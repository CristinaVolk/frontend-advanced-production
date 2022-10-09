import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

interface UseThemeHook {
	theme: ThemeEnum;
	toggleTheme: () => void;
}

export function useTheme(): UseThemeHook {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme;

    switch (theme) {
      case ThemeEnum.DARK:
        newTheme = ThemeEnum.LIGHT;
        break;

      case ThemeEnum.LIGHT:
        newTheme = ThemeEnum.DARK;
        break;

      default:
        newTheme = ThemeEnum.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
