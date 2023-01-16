import React, { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import classes from './Dropdown.module.scss';
import popupClasses from '../../styles/popup.module.scss';

interface DropdownItem {
    id: string;
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottom' } = props;

    return (
        <Menu
            as="div"
            className={classNames(classes.Dropdown, {}, [
                className,
                popupClasses.popup,
            ])}
        >
            <Menu.Button className={classes.btn}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(classes.menu, {}, [
                    popupClasses[direction],
                ])}
            >
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                classes.item,
                                {
                                    [popupClasses.active]: active,
                                    [popupClasses.disabled]: item.disabled,
                                },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.id}
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={item.id}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
