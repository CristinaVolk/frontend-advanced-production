import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card, CardTheme } from '../Card/Card';
import classes from './Tabs.module.scss';

export type TabItem<T extends string> = {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value:string;
  onTabClick?: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const clickHandler = useCallback((tab: TabItem<T>) => () => {
    if (onTabClick) {
      onTabClick(tab);
    }
  }, [onTabClick]);

  return (
       <div className={classNames(classes.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                 <Card
                    key={tab.value}
                    className={classes.tab}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    onClick={clickHandler(tab)}
                 >
                      {tab.content}
                 </Card>
            ))}
       </div>
  );
};
