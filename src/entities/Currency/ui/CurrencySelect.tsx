import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../../shared/const/Currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    readonly: boolean;
    value?: string;
    onChangeOption?: (value: Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { onChangeOption, value, readonly } = props;

    const options = [
        { value: Currency.RUB, content: Currency.RUB, unavailable: false },
        { value: Currency.EUR, content: Currency.EUR, unavailable: false },
        { value: Currency.USD, content: Currency.USD, unavailable: false },
    ];

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChangeOption?.(value as Currency);
        },
        [onChangeOption],
    );

    const listBoxProps = {
        ...props,
        direction: 'top' as const,
        defaultValue: t('Choose your currency'),
        selectedValue: value,
        onChange: onChangeHandler,
        items: options,
        readonly,
        label: t('Choose your currency >'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
