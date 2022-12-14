import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../model/consts/Country';

interface CountrySelectProps {
  value?: string;
  readonly: boolean;
  onChangeOption?: (value:Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    onChangeOption, value, readonly,
  } = props;
  const { t } = useTranslation();

  const options = [
    { value: Country.SCOTLAND, content: Country.SCOTLAND, unavailable: false },
    { value: Country.GB, content: Country.GB, unavailable: false },
    { value: Country.USA, content: Country.USA, unavailable: true },
    { value: Country.IRELAND, content: Country.IRELAND, unavailable: false },
  ];

  const onChangeHandler = useCallback((value: string) => {
    onChangeOption?.(value as Country);
  }, [onChangeOption]);

  return (
       <ListBox
          direction="bottom"
          defaultValue={t('Choose your country')}
          selectedValue={value}
          readonly={readonly}
          onChange={onChangeHandler}
          items={options}
          label={t('Choose your currency >')}
       />
  );
});
