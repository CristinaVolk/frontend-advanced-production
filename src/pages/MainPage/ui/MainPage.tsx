import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
       <Page>
            <Text title={t('main')} />
            <Input
               style={{ textShadow: '0 0 0 black' }}
               placeholder={t('EnterUsername')}
               value={value}
               autofocus
               onChange={onChange}
            />
       </Page>
  );
};

export default MainPage;
