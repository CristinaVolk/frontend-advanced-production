import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { ThemeEnum } from '../../../const/theme';

interface UseThemeHook {
    theme: ThemeEnum;
    toggleTheme: (saveAction: (theme: ThemeEnum) => void) => void;
}

export function useTheme(): UseThemeHook {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: ThemeEnum) => void) => {
        let newTheme: ThemeEnum;
        switch (theme) {
            case ThemeEnum.DARK:
                newTheme = ThemeEnum.LIGHT;
                break;
            case ThemeEnum.LIGHT:
                newTheme = ThemeEnum.BLUE;
                break;
            case ThemeEnum.BLUE:
                newTheme = ThemeEnum.DARK;
                break;
            default:
                newTheme = ThemeEnum.LIGHT;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || ThemeEnum.LIGHT,
        toggleTheme,
    };
}
