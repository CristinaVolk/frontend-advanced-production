import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleBlockType } from '../../model/const/const';
import { ArticleBlock } from '../../model/types/Article';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import classes from './ArticleDetails.module.scss';

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
    const articleDetailsData = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={classes.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={classes.block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={classes.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <VStack gap="16">
                <VStack max align="center">
                    <Skeleton width={200} height={200} border="50%" />
                </VStack>
                <Skeleton width={200} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                text={t(error)}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <Avatar
                    size={200}
                    src={articleDetailsData?.img}
                    alt={articleDetailsData?.title}
                />
                <VStack
                    max
                    align="start"
                    gap="8"
                    data-testid="ArticleDetails.Info"
                >
                    <Text
                        title={articleDetailsData?.title}
                        text={articleDetailsData?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="4">
                        <Icon Svg={EyeIcon} />
                        <Text
                            size={TextSize.M}
                            text={String(articleDetailsData?.views)}
                        />
                    </HStack>
                    <HStack gap="4">
                        <Icon Svg={CalendarIcon} />
                        <Text
                            size={TextSize.M}
                            text={articleDetailsData?.createdAt}
                        />
                    </HStack>
                </VStack>
                {articleDetailsData?.blocks.map(renderBlock)}
            </>
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
