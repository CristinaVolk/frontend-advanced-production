import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Rating } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../model/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
	className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('article');
  const user = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({ userId: user?.id || '', articleId });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: user?.id || '',
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [articleId, rateArticleMutation, user?.id]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  const rating = data?.length ? data[0].rate : 0;

  return (
       <Rating
          rate={rating}
          className={classNames('', {}, [className])}
          feedbackTitle={t('feedback')}
          hasFeedback
          title={t('rating-title')}
          onAccept={onAccept}
          onCancel={onCancel}
       />
  );
});

export default ArticleRating;
