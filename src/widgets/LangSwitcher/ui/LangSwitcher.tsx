import React from 'react';
import {useTranslation} from "react-i18next";

import {classNames} from "shared/lib/classNames";
import {Button, ThemeButton} from 'shared/ui/Button/Button';

import classes from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	}

	return (
		<Button
			className={classNames(classes.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleLanguage}
		>
			{t('language')}
		</Button>
	);
}