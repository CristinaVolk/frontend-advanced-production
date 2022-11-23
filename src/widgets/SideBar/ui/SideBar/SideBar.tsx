import React, { useMemo, useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { SideBarItem } from 'widgets/SideBar/ui/SideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import classes from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export function SideBar({ className }: SideBarProps) {
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
       <nav
          data-testid="sidebar"
          className={
               classNames(
			     classes.SideBar,
			  { [classes.collapsed]: collapsed },
			  [className],
               )
          }
       >
            <div className={classes.linkItems}>
                 {itemsList}
            </div>

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
       </nav>
  );
}
