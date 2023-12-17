import React, { memo, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { AddCommentFormAsync } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';

import { Loader } from '@/shared/ui/deprecated/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoadingHook } from '../../model/selectors/comments/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentSlice';
import { addCommentFormForArticle } from '../../model/services/addCommentFormForArticle/addCommentFormForArticle';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();

        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = getArticleDetailsCommentsIsLoadingHook();

        const onSendComment = useCallback(
            (text = '') => {
                dispatch(addCommentFormForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<TextRedesigned size="l" title={t('Comments')} />}
                    off={
                        <TextDeprecated
                            title={t('Comments')}
                            size={TextSize.L}
                        />
                    }
                />
                <Suspense fallback={<Loader />}>
                    <AddCommentFormAsync onSendComment={onSendComment} />
                </Suspense>

                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
