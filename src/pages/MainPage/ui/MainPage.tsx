import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

function MainPage() {
  const { t } = useTranslation();

  return (
       <>
            <h1>{t('main')}</h1>
            <BugButton />
       </>
  );
}

export default MainPage;
