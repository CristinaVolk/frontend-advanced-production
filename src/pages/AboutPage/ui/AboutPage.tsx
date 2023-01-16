import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <h1>{t('about-page')}</h1>
        </Page>
    );
}

export default AboutPage;
