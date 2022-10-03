import React, { useState } from 'react';
import { t } from 'i18next';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths, AppRoutes } from 'shared/config/routes/routes';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import MainIcon from '../../../shared/assets/icons/home.svg';
import AboutIcon from '../../../shared/assets/icons/about.svg';

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
            <div className={classes.linkItems}>
                 <div className={classes.linkItem}>
                      <AppLink
                         theme={AppLinkTheme.PRIMARY}
                         className={classes.link}
                         to={RoutePaths[AppRoutes.MAIN]}
                      >
                           <MainIcon className={classes.icon} />
                           <span>
                                {t('main')}
                           </span>
                      </AppLink>
                 </div>
                 <div className={classes.linkItem}>
                      <AppLink
                         theme={AppLinkTheme.PRIMARY}
                         className={classes.link}
                         to={RoutePaths[AppRoutes.ABOUT]}
                      >
                           <AboutIcon className={classes.icon} />
                           <span>{t('about')}</span>
                      </AppLink>
                 </div>
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
       </div>
  );
}
