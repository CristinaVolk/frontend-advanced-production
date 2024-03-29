import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import classes from './ArticleListItemDeprecated.module.scss';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleBlockType, ArticleView } from '../../../model/const/const';
import { ArticleTextBlock } from '../../../model/types/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const [, bindHover] = useHover();
    const { t } = useTranslation('article');
    const articleTypes = (
        <Text text={article.type.join(', ')} className={classes.types} />
    );
    const articleViews = (
        <Text text={String(article.views)} className={classes.views} />
    );
    const articleImage = (
        <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={classes.img}
            alt={article.title}
        />
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (textBlock) => textBlock.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <VStack
                className={classNames(classes.ArticleListItem, {}, [
                    className,
                    classes[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card className={classes.card}>
                    <HStack max justify="between" className={classes.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={classes.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={classes.date}
                        />
                    </HStack>
                    <Text title={article.title} className={classes.title} />
                    {articleTypes}

                    {articleImage}

                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={classes.textBlock}
                        />
                    )}

                    <HStack justify="between" className={classes.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.CREATIVE}>
                                {t('read-more')}
                            </Button>
                        </AppLink>

                        {articleViews}
                    </HStack>
                </Card>
            </VStack>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            {...bindHover}
            className={classNames(classes.ArticleListItem, {}, [
                className,
                classes[view],
            ])}
        >
            <Card className={classes.card}>
                <div className={classes.wrapperImage}>
                    {articleImage}
                    <Text text={article.createdAt} className={classes.date} />
                </div>
                <HStack>
                    {articleTypes}
                    {articleViews}
                    <Icon Svg={EyeIcon} />
                </HStack>
                <Text text={article.title} className={classes.title} />
            </Card>
        </AppLink>
    );
});
