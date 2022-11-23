import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {
  ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Array<Article>,
	isLoading?: boolean,
	view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
       <ArticleListItemSkeleton
          className={classes.card}
         // eslint-disable-next-line react/no-array-index-key
          key={index}
          view={view}
       />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
	  articles,
	  isLoading,
	  view = ArticleView.TILE,
  } = props;

  const renderArticle = (article: Article) => (
       <ArticleListItem
          view={view}
          article={article}
          key={article.id}
       />
	  );

  return (
       <div className={classNames(
         classes.ArticleList,
         {},
         [className, classes[view]],
       )}
       >
            {articles.length > 0
				  ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
       </div>
  );
});
