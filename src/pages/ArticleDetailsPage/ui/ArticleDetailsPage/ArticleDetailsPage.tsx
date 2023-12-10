import React from 'react';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsPageRedesigned } from './ArticlaDetailsPageRedesigned';
import { ArticleDetailsPageDeprecated } from './ArticlaDetailsPageDeprecated';

export interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsPageRedesigned className={className} />}
                off={<ArticleDetailsPageDeprecated className={className} />}
            />
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
