import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '../../lib/classNames';
import { DropdownDirection } from '../../types/ui';
import { HStack } from '../Stack/HStack/HStack';
import { Text, TextTheme } from '../Text/Text';
import { Button, ButtonTheme } from '../Button/Button';
import classes from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  unavailable: boolean;
}

export interface ListBoxProps {
  items?: ListBoxItem[],
  className?: string;
  selectedValue?: string;
  onChange?: (selectedValue:string) => void;
  defaultValue?: string;
  readonly?: boolean;
  direction: DropdownDirection;
  label?: string;
}

export const ListBox = (props:ListBoxProps) => {
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

  return (
       <HStack max justify="between" className={classes.wrapper}>
            {label && <Text text={label} theme={TextTheme.PRIMARY} />}
            <HListbox
               as="div"
               disabled={readonly}
               className={classNames(
                 classes.ListBox,
                 { },
                 [className],
               )}
               value={selectedValue}
               onChange={onChange}
            >
                 <HListbox.Button
                    disabled={readonly}
                    className={classes.trigger}
                 >
                      <Button
                         theme={ButtonTheme.NEAT}
                      >
                           {selectedValue ?? defaultValue}
                      </Button>
                 </HListbox.Button>
                 <HListbox.Options className={classNames(
                   classes.options,
                   {},
                   [classes[direction]],
                 )}
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
                                            [classes.active]: active,
                                            [classes.unavailable]: item.unavailable,
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
