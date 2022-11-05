import { createContext } from 'react';

export enum ThemeEnum {
	LIGHT = 'app_light',
	DARK = 'app_dark',
	BLUE = 'app_blue'
}

export interface IThemeContextProps {
	theme?: ThemeEnum;
	setTheme?: (theme:ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
