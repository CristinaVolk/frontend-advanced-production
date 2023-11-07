import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../../shared/const/Country';
import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    value?: string;
    readonly: boolean;
    onChangeOption?: (value: Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { onChangeOption, value, readonly } = props;
    const { t } = useTranslation();

    const options = [
        {
            value: Country.SCOTLAND,
            content: Country.SCOTLAND,
            unavailable: false,
        },
        {
            value: Country.GB,
            content: Country.GB,
            unavailable: false,
        },
        {
            value: Country.USA,
            content: Country.USA,
            unavailable: true,
        },
        {
            value: Country.IRELAND,
            content: Country.IRELAND,
            unavailable: false,
        },
    ];

    const onChangeHandler = useCallback(
        (value: string) => {
            onChangeOption?.(value as Country);
        },
        [onChangeOption],
    );

    const listBoxProps = {
        ...props,
        direction: 'top' as const,
        defaultValue: t('Choose your country'),
        selectedValue: value,
        readonly,
        onChange: onChangeHandler,
        items: options,
        label: t('Choose your country >'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
