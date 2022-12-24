import React from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRatingAsync } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{id:string}>();

  if (!id) {
    return null;
  }

  return (
       <DynamicModuleLoader reducers={reducers}>

            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                 <VStack max gap="16">
                      <ArticleDetailsPageHeader />

                      <ArticleDetails id={id} />

                      <ArticleRatingAsync articleId={id} />

                      <ArticleRecommendationsList />

                      <ArticleDetailsComments id={id} />
                 </VStack>
            </Page>
       </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
