import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

function ForbiddenPage() {
  const { t } = useTranslation('forbidden');

  return (
       <Page>
            <h1>{t('forbidden-page')}</h1>
       </Page>
  );
}

export default ForbiddenPage;
