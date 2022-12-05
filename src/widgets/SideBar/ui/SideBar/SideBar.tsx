import React, { memo, useMemo, useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import classes from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  const sideBarItemsList = useSelector(getSideBarItems);

  const itemsList = useMemo(() => sideBarItemsList.map(
    (item) => (
         <div key={item.path} className={classes.linkItem}>
              <SideBarItem item={item} />
         </div>
    ),
  ), [sideBarItemsList]);

  return (
       <aside
          data-testid="sidebar"
          className={
               classNames(
			     classes.SideBar,
			  { [classes.collapsed]: collapsed },
			  [className],
               )
          }
       >
            <VStack role="navigation" gap="4" className={classes.linkItems}>
                 {itemsList}
            </VStack>

            <Button
               data-testid="sidebar-toggle"
               className={
                         classNames(classes.toggle, {}, [ButtonTheme.ROUNDED])
                    }
               theme={ButtonTheme.BACKGROUND}
               square
               size={ButtonSize.M}
               onClick={onToggle}
            >
                 {collapsed ? '>' : '<' }
            </Button>

            <div className={
                    classNames(
				  classes.switchers,
				  { [classes.expanded]: !collapsed },
				  [],
                    )
               }
            >
                 <ThemeSwitcher />
                 <LangSwitcher short={collapsed} />
            </div>
       </aside>
  );
});
