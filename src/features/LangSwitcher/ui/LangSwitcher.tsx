import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';

import { ToggleFeatures } from '@/shared/lib/features';

interface LangSwitcherProps {
    short?: boolean;
    className?: string;
}

export const LangSwitcher = memo(({ short, className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ButtonRedesigned
                    className={className}
                    variant="clear"
                    onClick={toggleLanguage}
                >
                    {short ? t('language-short') : t('language-long')}
                </ButtonRedesigned>
            }
            off={
                <ButtonDeprecated
                    className={className}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggleLanguage}
                >
                    {short ? t('language-short') : t('language-long')}
                </ButtonDeprecated>
            }
        />
    );
});
