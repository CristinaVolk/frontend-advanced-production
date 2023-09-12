import React, { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { VStack } from '@/shared/ui/deprecated/Stack';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import classes from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBarDeprecated = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        console.log(collapsed);
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
                classes.SideBar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <VStack role="navigation" gap="4" className={classes.linkItems}>
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
    );
});
