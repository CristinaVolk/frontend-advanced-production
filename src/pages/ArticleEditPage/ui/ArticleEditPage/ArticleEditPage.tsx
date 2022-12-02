import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id:string}>();
  const isEdit = Boolean(id);

  return (
       <Page className={classNames('', {}, [className])}>
            {isEdit ? t('edit-article') : t('create-article')}
       </Page>
  );
});

export default ArticleEditPage;
