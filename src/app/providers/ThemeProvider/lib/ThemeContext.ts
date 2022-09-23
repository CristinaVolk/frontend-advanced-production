import { createContext } from 'react';

export enum ThemeEnum {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface IThemeContextProps {
	theme?: ThemeEnum;
	setTheme?: (theme:ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
