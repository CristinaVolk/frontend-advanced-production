import React, { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '../Card/Card';
import classes from './Tabs.module.scss';
import { Flex } from '../Stack';
import { FlexDirection } from '../Stack/Flex/Flex';

export type TabItem<T extends string> = {
    value: T;
    content: ReactNode;
};

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onTabClick?: (tab: TabItem<T>) => void;
    direction: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const clickHandler = useCallback(
        (tab: TabItem<T>) => () => {
            if (onTabClick) {
                onTabClick(tab);
            }
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            align="start"
            className={classNames(classes.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        key={tab.value}
                        className={classNames(
                            classes.tab,
                            { [classes.selected]: isSelected },
                            [className],
                        )}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={clickHandler(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
