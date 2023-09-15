import React, { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import classes from './SideBar.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SideBarProps {
    className?: string;
}

export const SideBarRedesigned = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const sideBarItemsList = useSelector(getSideBarItems);

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <SideBarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sideBarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                classes.SideBarRedesigned,
                { [classes.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <AppLogo className={classes.appLogo} size={collapsed ? 30 : 50} />
            <VStack role="navigation" gap="4" className={classes.linkItems}>
                {itemsList}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                clickable
                className={classNames(classes.toggle, {}, [])}
                Svg={ArrowIcon}
            />
            <div
                className={classNames(
                    classes.switchers,
                    { [classes.expanded]: !collapsed },
                    [],
                )}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classes.lang} />
            </div>
        </aside>
    );
});
