import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { Button } from '@/shared/ui/redesigned/Button';

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
        <Button className={className} variant="clear" onClick={toggleLanguage}>
            {short ? t('language-short') : t('language-long')}
        </Button>
    );
});
