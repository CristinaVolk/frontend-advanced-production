import {useContext} from "react";

import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum} from "./ThemeContext";

interface UseThemeHook {
	theme: ThemeEnum;
	toggleTheme: () => void;
}

export function useTheme(): UseThemeHook {
	const {theme, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}

	return {
		theme,
		toggleTheme
	}
}