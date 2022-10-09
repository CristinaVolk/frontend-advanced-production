import { useTranslation } from 'react-i18next';
import React from 'react';

function MainPage() {
  const { t } = useTranslation();

  return (
       <div>
            <h1>{t('main')}</h1>
       </div>
  );
}

export default MainPage;
