import React, { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text, TextTheme } from '../Text/Text';

import classes from './Select.module.scss';

export type SelectOption = {
  value: string;
  content:string;
}

interface SelectProps {
	className?: string;
    title?: string
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly : boolean;
    onChangeOption?: (value:string) => void;
}

export const Select = (props: SelectProps) => {
  const {
    className,
    title,
    label,
    options,
    value,
    readonly,
    onChangeOption,
  } = props;

  const optionsList = useMemo(() => options?.map((optionItem) => (
       <option
          value={optionItem.value}
          key={optionItem.value}
       >
            {optionItem.content}
       </option>
  )), [options]);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(event.target.value);
    }
  };

  return (
       <div className={classNames(classes.SelectWrapper, {}, [className])}>
            <Text title={title} theme={TextTheme.PRIMARY} />
            <div className={classes.selectBox}>
                 {label && (
                 // eslint-disable-next-line jsx-a11y/label-has-associated-control
                 <label className={classes.label}>
                      <span
                         className={classes.labelDesc}
                      >
                           {label}
                      </span>
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
       </div>
  );
};
