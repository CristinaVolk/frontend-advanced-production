import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import {
    getAuthDataHook,
    isAdminHook,
    isManagerHook,
    useUserActions,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import classes from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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

    const items = [
        ...(shouldAdminPanelBeDisplayed
            ? [
                  {
                      id: '10',
                      content: t('Admin'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
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
    ];

    return (
        <Dropdown
            direction="bottomLeft"
            className={classNames(classes.AvatarDropdown, {}, [className])}
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={items}
        />
    );
});
