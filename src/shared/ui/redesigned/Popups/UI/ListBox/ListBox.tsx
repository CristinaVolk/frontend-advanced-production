import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '../../../../../lib/classNames';
import { DropdownDirection } from '../../../../../types/ui';
import { HStack } from '../../../../redesigned/Stack/HStack/HStack';
import { Text } from '../../../Text/Text';
import { Button } from '../../../Button/Button';
import classes from './ListBox.module.scss';
import popupClasses from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    unavailable: boolean;
}

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    selectedValue?: string;
    onChange?: (selectedValue: string) => void;
    defaultValue?: string;
    readonly?: boolean;
    direction: DropdownDirection;
    label?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        className,
        defaultValue,
        selectedValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const menuClasses = [popupClasses[direction], popupClasses.menu];

    return (
        <HStack max justify="between">
            {label && <Text text={label} />}
            <HListbox
                as="div"
                disabled={readonly}
                className={classNames(classes.ListBox, {}, [
                    className,
                    popupClasses.popup,
                ])}
                value={selectedValue}
                onChange={onChange}
            >
                <HListbox.Button as="div" className={classes.trigger}>
                    <Button type="button">
                        {selectedValue ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(classes.options, {}, menuClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        classes.item,
                                        {
                                            [popupClasses.active]: active,
                                            [popupClasses.disabled]:
                                                item.unavailable,
                                        },
                                        [],
                                    )}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
