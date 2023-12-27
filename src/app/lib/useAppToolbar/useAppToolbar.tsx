import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();
    const { t } = useTranslation();
    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ABOUT]: <div>{t('About')}</div>,
        [AppRoutes.MAIN]: <div>{t('Main')}</div>,
        [AppRoutes.ARTICLES_DETAILS]: <ScrollToolbar />,
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
