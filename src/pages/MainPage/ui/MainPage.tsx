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
               placeholder="Enter your username"
               value={value}
               onChange={onChange}
            />
       </div>
  );
}

export default MainPage;
