import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRatingAsync } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import classes from './ArticleDetailsPage.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { ArticleDetailsPageProps } from './ArticleDetailsPage';

export const ArticleDetailsPageDeprecated = ({
    className,
}: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return null;
    }

    const rating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRatingAsync articleId={id} />,
        off: () => <Card>{t('The Article rating will appear soon')}</Card>,
    });

    return (
        <Page
            data-testid="ArticleDetailsPage"
            className={classNames(classes.ArticleDetailsPage, {}, [className])}
        >
            <VStack max gap="16">
                <ArticleDetailsPageHeader />

                <ArticleDetails id={id} />

                {rating}

                <ToggleFeatures
                    feature="isArticleRatingEnabled"
                    on={<ArticleRatingAsync articleId={id} />}
                    off={
                        <Card>{t('The Article rating will appear soon')}</Card>
                    }
                />

                <ArticleRecommendationsList />

                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};
