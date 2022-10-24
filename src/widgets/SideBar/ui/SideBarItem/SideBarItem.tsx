import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/items';

type SideBarItemProps = {
  item : SideBarItemType;
}

export const SideBarItem = memo(({ item }: SideBarItemProps) => {
  const { path, text, Icon } = item;
  const { t } = useTranslation();

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
