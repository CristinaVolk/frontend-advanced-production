import React, { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '../../lib/classNames';
import { DropdownDirection } from '../../types/ui';
import { AppLink } from '../AppLink/AppLink';
import classes from './Dropdown.module.scss';

interface DropdownItem {
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
  const {
    className, trigger, items, direction = 'bottom',
  } = props;

  return (
       <Menu as="div" className={classNames(classes.Dropdown, {}, [className])}>
            <Menu.Button className={classes.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(classes.menu, {}, [classes[direction]])}>
                 {items.map((item) => {
                   const content = ({ active }: {active: boolean}) => (
                        <button
                           type="button"
                           disabled={item.disabled}
                           onClick={item.onClick}
                           className={classNames(
                             classes.item,
                             {
                               [classes.active]: active,
                               [classes.disabled]: item.disabled,
                             },
                             [],
                           )}
                        >
                             {item.content}
                        </button>
                   );

                   if (item.href) {
                     return (
                          <Menu.Item disabled={item.disabled} as={AppLink} to={item.href}>
                               {content}
                          </Menu.Item>
                     );
                   }

                   return (
                        <Menu.Item disabled={item.disabled} as={Fragment}>
                             {content}
                        </Menu.Item>
                   );
                 })}
            </Menu.Items>
       </Menu>
  );
};
