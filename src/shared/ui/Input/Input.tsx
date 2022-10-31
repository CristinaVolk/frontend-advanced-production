import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly' | 'onKeyDown'
  >

interface InputProps extends HTMLInputProps {
	className?: string;
    value?: string | number | Country | Currency;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
    onKeyPress?: (event: React.KeyboardEvent) => void;
}

export const Input = memo((props:InputProps) => {
  const {
    className,
    value,
    onChange,
    onKeyPress,
    placeholder,
    type = 'text',
    autofocus,
    readonly,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const isCaretVisible = !focused && !readonly;

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
      setFocused(true);
    }
  }, [autofocus]);

  return (
       <div className={classNames(classes.InputWrapper, {}, [])}>
            {placeholder && (
            <div className={classes.placeholder}>
                 {`${placeholder} >`}
            </div>
            )}
            <div className={classes.caretWrapper}>
                 <input
                    ref={inputRef}
                    className={classNames(
                      classes.input,
                      { [classes.loginFormInput]: Boolean(className) },
                      [],
                    )}
                    value={value}
                    type={type}
                    onChange={onHandleChange}
                    onKeyDown={onKeyPress}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...restProps}
                 />
                 {isCaretVisible && (
                 <span
                    className={classes.caret}
                    style={{ left: `${caretPosition * 5}px` }}
                 />
                 )}
            </div>
       </div>
  );
});
