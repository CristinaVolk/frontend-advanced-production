import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import classes from './SideBar.module.scss';

interface SideBarProps {
	className: string;
}

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
       <div className={
               classNames(
			     classes.SideBar,
			  { [classes.collapsed]: collapsed },
			  [className],
               )
          }
       >
            <Button
                 className={
                         classNames(
				  classes.toggle,
				  { [classes.toggleBtnCollapsed]: collapsed },
				  [],
                         )
                    }
                 theme={ThemeButton.CLEAR}
                 onClick={onToggle}
            >
                 Toggle
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
