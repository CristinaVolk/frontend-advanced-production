import React, { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { VStack } from '@/shared/ui/Stack';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import classes from './SideBar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const sideBarItemsList = useSelector(getSideBarItems);

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <div key={item.path} className={classes.linkItem}>
                    <SideBarItem item={item} />
                </div>
            )),
        [sideBarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        classes.SideBarRedesigned,
                        { [classes.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={classes.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        classes.SideBar,
                        { [classes.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <VStack
                        role="navigation"
                        gap="4"
                        className={classes.linkItems}
                    >
                        {itemsList}
                    </VStack>

                    <Button
                        data-testid="sidebar-toggle"
                        className={classNames(classes.toggle, {}, [])}
                        theme={ButtonTheme.BACKGROUND}
                        square
                        size={ButtonSize.M}
                        onClick={onToggle}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <div
                        className={classNames(
                            classes.switchers,
                            { [classes.expanded]: !collapsed },
                            [],
                        )}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
