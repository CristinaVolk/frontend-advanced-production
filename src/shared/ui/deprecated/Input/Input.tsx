import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from '../../../lib/classNames';
import { HStack } from '../../redesigned/Stack/HStack/HStack';
import classes from './Input.module.scss';
import { Country } from '../../../const/Country';
import { Currency } from '../../../const/Currency';

type TextColor = 'primary' | 'secondary';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly' | 'onKeyDown'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number | Country | Currency;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    textColor?: TextColor;
}

/**
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        onKeyPress,
        placeholder,
        type = 'text',
        autofocus,
        readonly,
        textColor = 'primary',
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
        <HStack
            gap="8"
            max
            className={classNames(classes.InputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={classes.placeholder}>{`${placeholder} >`}</div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={inputRef}
                    className={classNames(classes.input, {}, [
                        classes[textColor],
                    ])}
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
        </HStack>
    );
});
