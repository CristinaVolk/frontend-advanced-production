import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { getUserAuthData } from '@/entities/User';
import classes from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon as IconRedesigned } from '@/shared/ui/redesigned/Icon';
import { classNames } from '@/shared/lib/classNames';

type SideBarItemProps = {
    item: SideBarItemType;
    collapsed: boolean;
};

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { path, text, Icon } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
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
            }
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.PRIMARY}
                    to={path}
                    className={classNames(classes.item, {
                        [classes.collapsed]: collapsed,
                    })}
                >
                    <Icon className={classes.icon} />
                    <span className={classes.link}>{t(text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
});
