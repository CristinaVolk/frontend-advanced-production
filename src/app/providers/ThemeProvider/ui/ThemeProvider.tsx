import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { ThemeEnum } from '@/shared/const/theme';
import { userJsonSettingsSelector } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme: ThemeEnum;
    children: ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const { theme: defaultTheme } = userJsonSettingsSelector();
    const [isThemeInit, setThemeInit] = useState<boolean>(false);

    const [theme, setTheme] = useState<ThemeEnum>(
        initialTheme || defaultTheme || ThemeEnum.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInit && defaultTheme) {
            setThemeInit(true);
            setTheme(defaultTheme);
        }
    }, [defaultTheme, isThemeInit]);

    useEffect(() => {
        document.body.className = theme;
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
