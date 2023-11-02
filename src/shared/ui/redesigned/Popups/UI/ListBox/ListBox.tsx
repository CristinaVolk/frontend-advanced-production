import React, { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '../../../../../lib/classNames';
import { DropdownDirection } from '../../../../../types/ui';
import { HStack } from '../../../../redesigned/Stack/HStack/HStack';
import { Text } from '../../../Text/Text';
import { Button } from '../../../Button/Button';
import classes from './ListBox.module.scss';
import popupClasses from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '../../../../../assets/icons/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    unavailable?: boolean;
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    selectedValue?: T;
    defaultValue?: string;
    onChange?: (selectedValue: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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
    const selectedItem = useMemo(
        () => items?.find((item) => item.value === selectedValue),
        [items, selectedValue],
    );

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
                    <Button
                        variant="filled"
                        type="button"
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
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
                                            [popupClasses.selected]: selected,
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
}
