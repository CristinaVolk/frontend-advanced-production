import React, { useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import classes from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
       <div
          data-testid="sidebar"
          className={
               classNames(
			     classes.SideBar,
			  { [classes.collapsed]: collapsed },
			  [className],
               )
          }
       >
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
                 <LangSwitcher />
            </div>
       </div>
  );
}
