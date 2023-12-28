import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ThemeEnum } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
    initialTheme: ThemeEnum;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY,
) as ThemeEnum;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [isThemeInit, setThemeInit] = useState<boolean>(false);

    const [theme, setTheme] = useState<ThemeEnum>(
        initialTheme || fallbackTheme || ThemeEnum.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme);
            setThemeInit(true);
        }
    }, [initialTheme, isThemeInit]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
