import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/const/const';
import classes from './ArticleListItem.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        const mainClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => classes.ArticleListItemRedesigned,
            off: () => classes.ArticleListItem,
        });

        if (view === ArticleView.LIST) {
            const cardContent = (
                <>
                    <div className={classes.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            width={150}
                            height={16}
                            className={classes.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={classes.date}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={classes.title}
                    />
                    <Skeleton height={24} className={classes.img} />
                    <div className={classes.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </>
            );
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        classes[view],
                    ])}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <CardRedesigned
                                border="round"
                                className={classes.card}
                            >
                                {cardContent}
                            </CardRedesigned>
                        }
                        off={
                            <CardDeprecated className={classes.card}>
                                {cardContent}
                            </CardDeprecated>
                        }
                    />
                </div>
            );
        }

        const cardContent = (
            <>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <SkeletonRedesigned
                            width="100%"
                            height={150}
                            border="32px"
                            className={classes.img}
                        />
                    }
                    off={
                        <div className={classes.wrapperImage}>
                            <Skeleton
                                width={200}
                                height={200}
                                className={classes.img}
                            />
                            <div className={classes.infoWrapper}>
                                <Skeleton width={130} height={16} />
                            </div>
                            <Skeleton
                                width={150}
                                height={16}
                                className={classes.title}
                            />
                        </div>
                    }
                />
            </>
        );

        return (
            <div
                className={classNames(mainClass, {}, [
                    className,
                    classes[view],
                ])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <CardRedesigned border="round" className={classes.card}>
                            {cardContent}
                        </CardRedesigned>
                    }
                    off={
                        <CardDeprecated className={classes.card}>
                            {cardContent}
                        </CardDeprecated>
                    }
                />
            </div>
        );
    },
);
