import { useTranslation } from 'react-i18next';
import React from 'react';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
       <Page>
            <Text title={t('main')} />
       </Page>
  );
};

export default MainPage;
