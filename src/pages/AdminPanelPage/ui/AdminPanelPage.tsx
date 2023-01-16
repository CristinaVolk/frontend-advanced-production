import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AdminPanelPage() {
    const { t } = useTranslation('admin-panel');

    return (
        <Page data-testid="AdminPanelPage">
            <h1>{t('admin-panel-page')}</h1>
        </Page>
    );
}

export default AdminPanelPage;
