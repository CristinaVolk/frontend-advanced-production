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
    const { theme: defaultTheme = ThemeEnum.DARK } = userJsonSettingsSelector();
    const [isThemeInit, setThemeInit] = useState<boolean>(false);

    const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

    useEffect(() => {
        if (!isThemeInit) {
            setThemeInit(true);
            setTheme(defaultTheme);
        }
    }, [defaultTheme, isThemeInit]);

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
