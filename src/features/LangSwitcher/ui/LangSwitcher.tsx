import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';

import classes from './LangSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggleLanguage}>
                    {short ? t('language-short') : t('language-long')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames(classes.LangSwitcher, {}, [
                        className,
                    ])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggleLanguage}
                >
                    {short ? t('language-short') : t('language-long')}
                </ButtonDeprecated>
            }
        />
    );
});
