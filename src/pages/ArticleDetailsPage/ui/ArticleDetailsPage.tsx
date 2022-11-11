import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id:string}>();

  if (!id) {
    return (
         <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
              {t('Article has not been found')}
         </div>
    );
  }

  return (
       <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            {t('article')}
            <ArticleDetails id={id} />
       </div>
  );
};

export default ArticleDetailsPage;
