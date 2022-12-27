import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import classes from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

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
			    href: getRouteAdmin(),
			  }] : []),
			  {
			    id: '1',
			    content: t('Profile'),
			    href: getRouteProfile(authData.id),
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
