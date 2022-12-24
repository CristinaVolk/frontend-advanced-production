import { createContext } from 'react';
import { ThemeEnum } from '@/shared/const/theme';

export interface IThemeContextProps {
	theme?: ThemeEnum;
	setTheme?: (theme:ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
