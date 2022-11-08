import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  return (
       <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            {t('article-details-page')}

       </div>
  );
};

export default ArticleDetailsPage;
