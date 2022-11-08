import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import classes from './ArticlePage.module.scss';

interface ArticlePageProps {
	className?: string;
}

const ArticlePage = memo(({ className }: ArticlePageProps) => {
  const { t } = useTranslation();
  return (
       <div className={classNames(classes.ArticlePage, {}, [className])}>
            {t('article-page')}
       </div>
  );
});

export default ArticlePage;
