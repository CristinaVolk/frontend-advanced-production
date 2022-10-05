import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

function MainPage() {
  const { t } = useTranslation();

  return (
       <>
            <h1>{t('main')}</h1>
            <Modal><h1>{t('main')}</h1></Modal>
       </>
  );
}

export default MainPage;
