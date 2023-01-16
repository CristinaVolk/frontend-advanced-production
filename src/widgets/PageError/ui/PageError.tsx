import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import classes from './PageError.module.scss';
import { ThemeEnum } from '@/shared/const/theme';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');
    const onRefresh = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <section className={`app ${ThemeEnum.DARK}`}>
            <div className={classNames(classes.PageError, {}, [className])}>
                <Button onClick={onRefresh} theme={ButtonTheme.CREATIVE}>
                    {t('refresh')}
                </Button>
            </div>
        </section>
    );
});
