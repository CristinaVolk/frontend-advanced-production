import React, { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames';
import classes from './Popover.module.scss';
import popupClasses from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, direction = 'bottomLeft', trigger, children } = props;
    const menuClasses = [popupClasses[direction], popupClasses.menu];

    return (
        <HPopover
            className={classNames(classes.Popover, {}, [
                className,
                popupClasses.popup,
            ])}
        >
            <HPopover.Button as="div">{trigger}</HPopover.Button>

            <HPopover.Panel
                className={classNames(classes.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
