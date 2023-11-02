import React, {
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Modes } from '../../../lib/classNames';
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
    addonRight?: ReactNode;
    addonLeft?: ReactNode;
}

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
        addonRight,
        addonLeft,
        ...restProps
    } = props;

    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const onBlur = () => {
        setFocused(false);
    };

    const onFocus = () => {
        setFocused(true);
    };

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
            setFocused(true);
        }
    }, [autofocus]);

    const modes: Modes = {
        [classes.readonly]: readonly,
        [classes.focused]: focused,
        [classes.withAddonLeft]: Boolean(addonLeft),
        [classes.withAddonRight]: Boolean(addonRight),
    };

    return (
        <div className={classNames(classes.InputWrapper, modes, [className])}>
            <div className={classes.addonLeft}>{addonLeft}</div>
            <input
                ref={inputRef}
                className={classNames(classes.input, {}, [classes[textColor]])}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onHandleChange}
                onKeyDown={onKeyPress}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                {...restProps}
            />
            <div className={classes.addonRight}>{addonRight}</div>
        </div>
    );
});
