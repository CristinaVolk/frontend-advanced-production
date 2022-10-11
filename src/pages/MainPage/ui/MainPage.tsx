import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
       <div>
            <h1>{t('main')}</h1>
            <Input
               style={{ textShadow: '0 0 0 black' }}
               placeholder={t('EnterUsername')}
               value={value}
               autofocus
               onChange={onChange}
            />
       </div>
  );
}

export default MainPage;
