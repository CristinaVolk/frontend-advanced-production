import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';

import { AddCommentFormAsync } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';

import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import {
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentSlice';
import {
  addCommentFormForArticle,
} from '../../model/services/addCommentFormForArticle/addCommentFormForArticle';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback((text = '') => {
    dispatch(addCommentFormForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
       <VStack max gap="16" className={classNames('', {}, [className])}>
            <Text title={t('Comments')} />

            <AddCommentFormAsync onSendComment={onSendComment} />

            <CommentList
               isLoading={commentsIsLoading}
               comments={comments}
            />
       </VStack>
  );
});
