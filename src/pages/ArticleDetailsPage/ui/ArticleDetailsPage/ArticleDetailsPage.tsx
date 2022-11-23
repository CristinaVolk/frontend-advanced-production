import React, { useCallback } from 'react';
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
import { AddCommentFormAsync } from 'features/AddCommentForm';
import {
  addCommentFormForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentFormForArticle/addCommentFormForArticle';
import { Page } from 'shared/ui/Page/Page';
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

  const onSendComment = useCallback((text = '') => {
    dispatch(addCommentFormForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
         <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
              {t('Article has not been found')}
         </Page>
    );
  }

  return (
       <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                 {t('article')}
                 <ArticleDetails id={id} />
                 <Text title={t('Comments')} />
                 <AddCommentFormAsync onSendComment={onSendComment} />
                 <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                 />
            </Page>

       </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
