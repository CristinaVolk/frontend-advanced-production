import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

import { Country } from '../model/types/Country';

interface CountrySelectProps {
  label?: string;
  value?: string;
  readonly: boolean;
  onChangeOption?: (value:Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    onChangeOption, label, value, readonly,
  } = props;
  const { t } = useTranslation();

  const options = [
    { value: Country.SCOTLAND, content: Country.SCOTLAND },
    { value: Country.GB, content: Country.GB },
    { value: Country.USA, content: Country.USA },
    { value: Country.IRELAND, content: Country.IRELAND },
  ];

  const onChangeHandler = useCallback((value: string) => {
    onChangeOption?.(value as Country);
  }, [onChangeOption]);

  return (
       <Select
          title={t('Choose your country')}
          label={label}
          value={value}
          readonly={readonly}
          onChangeOption={onChangeHandler}
          options={options}
       />
  );
});
