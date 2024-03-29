import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function ForbiddenPage() {
    const { t } = useTranslation('forbidden');

    return (
        <Page data-testid="ForbiddenPage">
            <h1>{t('forbidden-page')}</h1>
        </Page>
    );
}

export default ForbiddenPage;
