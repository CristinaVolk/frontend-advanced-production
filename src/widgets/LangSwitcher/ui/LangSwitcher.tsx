import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
       <Button
          className={classNames(classes.LangSwitcher, {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggleLanguage}
       >
            {short ? t('language-short') : t('language-long')}
       </Button>
  );
}
