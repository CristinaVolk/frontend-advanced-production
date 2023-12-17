import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import {
    Text as TextDeprecated,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendations } from '../api/articleRecommendationsListApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { t } = useTranslation('article');
        const { className } = props;
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendations(3);

        if (isLoading) {
            return <Loader />;
        }

        if (error) {
            return (
                <div className={classNames('', {}, [])}>
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned
                                size="m"
                                title={t('Error')}
                                variant="error"
                            />
                        }
                        off={
                            <TextDeprecated
                                size={TextSize.M}
                                title={t('Error')}
                                theme={TextTheme.ERROR}
                            />
                        }
                    />
                </div>
            );
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<TextRedesigned title={t('Recommendations')} />}
                    off={<TextDeprecated title={t('Recommendations')} />}
                />

                {articles && (
                    <ArticleList
                        isLoading={isLoading}
                        target="_blank"
                        articles={articles}
                    />
                )}
            </VStack>
        );
    },
);
