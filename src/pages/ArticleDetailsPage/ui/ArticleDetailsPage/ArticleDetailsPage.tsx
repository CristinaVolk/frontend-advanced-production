import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentFormAsync } from 'features/AddCommentForm';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';

import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import {
  ArticleDetailsPageHeader,
} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
  getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/recommendations/recommendations';
import {
  addCommentFormForArticle,
} from '../../model/services/addCommentFormForArticle/addCommentFormForArticle';
import {
  getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import {
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentSlice';

import classes from './ArticleDetailsPage.module.scss';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id:string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text = '') => {
    dispatch(addCommentFormForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
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

                 <ArticleDetailsPageHeader />

                 <ArticleDetails id={id} />

                 <Text className={classes.commentTitle} title={t('Recommendations')} />

                 <ArticleList
                    className={classes.recommendations}
                    target="_blank"
                    isLoading={recommendationsIsLoading}
                    articles={recommendations}
                 />

                 <Text className={classes.commentTitle} title={t('Comments')} />

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
