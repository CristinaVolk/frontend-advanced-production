import React, {
  InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string;
    value?: string;
    autofocus?: boolean,
    onChange?: (value: string) => void
}

export const Input = memo((props:InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autofocus,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  useEffect(() => {
    if (autofocus) {
      setFocused(true);
    }
  }, [autofocus]);

  return (
       <div className={classNames(classes.InputWrapper, {}, [className])}>
            {placeholder && (
            <div className={classes.placeholder}>
                 {`${placeholder} >`}
            </div>
            )}
            <div className={classes.caretWrapper}>
                 <input
                    className={classes.input}
                    value={value}
                    type={type}
                    onChange={changeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...restProps}
                 />
                 {focused && (
                 <span
                    className={classes.caret}
                    style={{ left: `${caretPosition * 8}px` }}
                 />
                 )}
            </div>
       </div>
  );
});
