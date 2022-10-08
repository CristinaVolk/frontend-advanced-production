import { useTranslation } from 'react-i18next';
import React from 'react';
import { Counter } from 'entities/Counter';

function MainPage() {
  const { t } = useTranslation();

  return (
       <div>
            <h1>{t('main')}</h1>
            <Counter />
       </div>
  );
}

export default MainPage;
