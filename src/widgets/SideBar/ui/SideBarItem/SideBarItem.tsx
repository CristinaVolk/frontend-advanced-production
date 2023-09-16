import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import classes from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/types/sidebar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon as IconRedesigned } from '@/shared/ui/redesigned/Icon';
import { classNames } from '@/shared/lib/classNames';

type SideBarItemProps = {
    item: SideBarItemType;
    collapsed: boolean;
};

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { text } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(classes.itemRedesigned, {
                [classes.collapsedRedesigned]: collapsed,
            })}
            activeClassName={classes.active}
        >
            <IconRedesigned Svg={item.Icon} />
            <span className={classes.link}>{t(text)}</span>
        </AppLink>
    );
});
