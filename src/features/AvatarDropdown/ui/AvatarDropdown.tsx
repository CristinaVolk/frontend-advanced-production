import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getAuthDataHook, isAdminHook, isManagerHook, useUserActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import classes from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
	className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = getAuthDataHook();
  const isAdmin = isAdminHook();
  const isManager = isManagerHook();
  const shouldAdminPanelBeDisplayed = isAdmin || isManager;
  const { logout } = useUserActions();

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

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
