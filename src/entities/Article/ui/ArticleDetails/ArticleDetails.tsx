import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  getArticleDetailsData, getArticleDetailsError,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  // const isLoading = useSelector(getArticleDetailsIsLoading);
  const isLoading = true;

  const error = useSelector(getArticleDetailsError);
  const articleDetailsData = useSelector(getArticleDetailsData);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [id, dispatch]);

  let content;

  if (isLoading) {
    content = (
         <div>
              <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
              <Skeleton className={classes.title} width={200} height={32} />
              <Skeleton className={classes.skeleton} width={600} height={24} />
              <Skeleton className={classes.skeleton} width="100%" height={200} />
              <Skeleton className={classes.skeleton} width="100%" height={200} />
         </div>
    );
  } else if (error) {
    content = <Text theme={TextTheme.ERROR} text={t(error)} align={TextAlign.CENTER} />;
  } else {
    content = <div>{t('article-details-page')}</div>;
  }

  return (
       <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                 {content}
            </div>
       </DynamicModuleLoader>
  );
});
