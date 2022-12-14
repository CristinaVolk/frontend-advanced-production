import {
  FC, ReactNode, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT;

interface ThemeProviderProps {
  initialTheme: ThemeEnum,
  children: ReactNode,
}
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
       <ThemeContext.Provider value={defaultProps}>
            {children}
       </ThemeContext.Provider>
  );
};
