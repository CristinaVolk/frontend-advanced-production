import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../model/types/Currency';

interface CurrencySelectProps {
    readonly: boolean;
	value?: string;
	onChangeOption?: (value:Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    onChangeOption, value, readonly,
  } = props;

  const options = [
    { value: Currency.RUB, content: Currency.RUB, unavailable: false },
    { value: Currency.EUR, content: Currency.EUR, unavailable: false },
    { value: Currency.USD, content: Currency.USD, unavailable: false },
  ];

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChangeOption?.(value as Currency);
  }, [onChangeOption]);

  return (

       <ListBox
          direction="bottom"
          defaultValue={t('Choose your currency')}
          selectedValue={value}
          onChange={onChangeHandler}
          items={options}
          readonly={readonly}
          label={t('Choose your currency >')}
       />

  );
});
