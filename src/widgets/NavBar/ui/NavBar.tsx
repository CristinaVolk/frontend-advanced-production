import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoutes, RoutePaths } from 'shared/config/routes/routes';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import classes from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();

  return (
       <div className={classNames(classes.NavBar, {}, [className])}>
            <div className={classes.links}>
                 <AppLink
                      theme={AppLinkTheme.PRIMARY}
                      className={classes.mainLink}
                      to={RoutePaths[AppRoutes.MAIN]}
                 >
                      {t('main')}
                 </AppLink>
                 <AppLink
                      theme={AppLinkTheme.INVERTED}
                      className={classes.mainLink}
                      to={RoutePaths[AppRoutes.ABOUT]}
                 >
                      {t('about')}
                 </AppLink>
            </div>
       </div>
  );
}
