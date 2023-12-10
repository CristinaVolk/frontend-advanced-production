import React from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRatingAsync } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageProps } from './ArticleDetailsPage';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

export const ArticleDetailsPageRedesigned = ({
    className,
}: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <StickyContentLayout
            content={
                <Page
                    data-testid="ArticleDetailsPage"
                    className={classNames(classes.ArticleDetailsPage, {}, [
                        className,
                    ])}
                >
                    <VStack max gap="16">
                        <DetailsContainer />
                        <ArticleRatingAsync articleId={id} />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </VStack>
                </Page>
            }
            right={<AdditionalInfoContainer />}
        />
    );
};
