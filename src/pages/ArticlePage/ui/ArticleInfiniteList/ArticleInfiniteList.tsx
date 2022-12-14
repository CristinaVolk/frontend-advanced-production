import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import {
  getArticlePageError, getArticlePageIsLoading, getArticlePageView,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import { getArticles } from '../../model/slices/articlePageSlice/articlePageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView) || ArticleView.TILE;
  const { t } = useTranslation('article');
  const error = useSelector(getArticlePageError);

  if (error) {
    return <Text text={t('error')} />;
  }

  return (
       <ArticleList
          isVirtualized={false}
          articles={articles}
          isLoading={isLoading}
          view={view}
          className={classNames('', {}, [className])}
       />
  );
});
