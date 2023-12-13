import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import classes from './ArticleDetails.module.scss';
import {
    ArticleDetailsDeprecated,
    ArticleDetailsLoadingDeprecated,
} from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    ArticleDetailsLoadingRedesigned,
    ArticleDetailsRedesigned,
} from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsLoadingRedesigned />}
                off={<ArticleDetailsLoadingDeprecated />}
            />
        );
    } else if (error) {
        content = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => (
                <TextRedesigned
                    variant="error"
                    text={t(error)}
                    align="center"
                />
            ),
            off: () => (
                <TextDeprecated
                    theme={TextTheme.ERROR}
                    text={t(error)}
                    align={TextAlign.CENTER}
                />
            ),
        });
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsRedesigned />}
                off={<ArticleDetailsDeprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                align="center"
                gap="16"
                className={classNames(classes.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
