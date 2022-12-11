import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendations } from '../api/articleRecommendationsListApi';

interface ArticleRecommendationsListProps {
	className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { t } = useTranslation(('article'));
  const { className } = props;
  const { isLoading, data: articles, error } = useArticleRecommendations(3);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
         <div className={classNames('', {}, [])}>
              <Text size={TextSize.M} title={t('Error')} />
         </div>
    );
  }

  return (
       <VStack gap="8" className={classNames('', {}, [className])}>
            <Text title={t('Recommendations')} />
            {articles && (
            <ArticleList
               isVirtualized={false}
               isLoading={isLoading}
               target="_blank"
               articles={articles}
            />
            )}
       </VStack>
  );
});
