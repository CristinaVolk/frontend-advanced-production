import React, { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { HStack } from '../Stack/HStack/HStack';
import { Text, TextTheme } from '../Text/Text';

import classes from './Select.module.scss';

export type SelectOption<T extends string> = {
    value: T;
    content: string;
};

interface SelectProps<T extends string> {
    className?: string;
    title?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    readonly: boolean;
    onChangeOption?: (value: T) => void;
}

/**
 * deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        title,
        label,
        options,
        value,
        readonly,
        onChangeOption,
    } = props;

    const optionsList = useMemo(
        () =>
            options?.map((optionItem) => (
                <option value={optionItem.value} key={optionItem.value}>
                    {optionItem.content}
                </option>
            )),
        [options],
    );

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(event.target.value as T);
        }
    };

    return (
        <HStack
            max
            className={classNames(classes.SelectWrapper, {}, [className])}
        >
            <Text text={title} theme={TextTheme.PRIMARY} />
            <div className={classes.selectBox}>
                {label && (
                    // eslint-disable-next-line jsx-a11y/label-has-associated-control
                    <label className={classes.label}>
                        <span className={classes.labelDesc}>{label}</span>
                    </label>
                )}
                <select
                    id="select-box1"
                    className={classes.select}
                    value={value}
                    onChange={onChange}
                    disabled={readonly}
                >
                    {optionsList}
                </select>
            </div>
        </HStack>
    );
};
