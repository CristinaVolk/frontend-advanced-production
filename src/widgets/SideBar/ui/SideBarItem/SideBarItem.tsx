import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { getUserAuthData } from '@/entities/User';
import classes from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/types/sidebar';

type SideBarItemProps = {
  item : SideBarItemType;
}

export const SideBarItem = memo(({ item }: SideBarItemProps) => {
  const { path, text, Icon } = item;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
       <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classes.link}
          to={path}
       >
            <Icon className={classes.icon} />
            <span>
                 {t(text)}
            </span>
       </AppLink>
  );
});
