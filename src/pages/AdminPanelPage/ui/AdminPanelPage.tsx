import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

function AdminPanelPage() {
  const { t } = useTranslation('admin-panel');

  return (
       <Page>
            <h1>{t('admin-panel-page')}</h1>
       </Page>
  );
}

export default AdminPanelPage;
