import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../model/types/Currency';

interface CurrencySelectProps {
    readonly: boolean;
	label?: string;
	value?: string;
	onChangeOption?: (value:Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    onChangeOption, label, value, readonly,
  } = props;

  const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ];

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChangeOption?.(value as Currency);
  }, [onChangeOption]);

  return (
       <Select
          title={t('Choose your currency')}
          label={label}
          value={value}
          onChangeOption={onChangeHandler}
          options={options}
          readonly={readonly}
       />
  );
});
