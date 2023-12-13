import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import classes from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleBlockType, ArticleView } from '../../../model/const/const';
import { ArticleTextBlock } from '../../../model/types/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button/Button';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const { className, article, view, target } = props;

    const userInfo = (
        <>
            <Avatar
                size={32}
                src={article.user.avatar}
                className={classes.avatar}
            />
            <Text bold text={article.user.username} />
        </>
    );

    const articleViews = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={classes.views} />
        </HStack>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (textBlock) => textBlock.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                cardPaddings="24"
                max
                data-testid="ArticleListItem"
                className={classNames(classes.ArticleListItemRedesigned, {}, [
                    className,
                    classes[view],
                ])}
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        <Text title={article.title} bold />
                        <Text title={article.subtitle} size="s" />
                    </HStack>

                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={classes.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={classes.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">{t('read-more')}</Button>
                        </AppLink>
                        {articleViews}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(classes.ArticleListItem, {}, [
                className,
                classes[view],
            ])}
        >
            <Card className={classes.card} cardPaddings="0">
                <AppImage
                    fallback={<Skeleton width="100%" height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={classes.img}
                />
                <VStack className={classes.info} gap="4">
                    <Text text={article.title} className={classes.title} />
                    <VStack gap="4" className={classes.footer} max>
                        <HStack justify="between" max>
                            <Text
                                text={article.createdAt}
                                className={classes.date}
                            />
                            {articleViews}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
