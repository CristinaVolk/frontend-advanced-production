import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { AppRoutes, RoutePaths } from '@/shared/config/routes/routes';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import classes from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
	className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const shouldAdminPanelBeDisplayed = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
       <Dropdown
          direction="bottomLeft"
          className={classNames(classes.AvatarDropdown, {}, [className])}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
			  ...(shouldAdminPanelBeDisplayed ? [{
			    id: '10',
			    content: t('Admin'),
			    href: RoutePaths[AppRoutes.ADMIN_PANEL],
			  }] : []),
			  {
			    id: '1',
			    content: t('Profile'),
			    href: RoutePaths[AppRoutes.PROFILE] + authData.id,
			  },
			  {
			    id: '2',
			    content: t('Logout'),
			    onClick: onLogout,
			  },
          ]}
       />
  );
});
