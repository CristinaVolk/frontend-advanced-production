import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import {
  articleDetailsCommentsReducer, getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentSlice';

import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id:string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
         <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
              {t('Article has not been found')}
         </div>
    );
  }

  return (
       <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                 {t('article')}
                 <ArticleDetails id={id} />
                 <Text title={t('Comments')} />
                 <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                 />
            </div>

       </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
