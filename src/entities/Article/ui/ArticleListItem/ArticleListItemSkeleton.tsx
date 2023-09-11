import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import { ArticleView } from '../../model/const/const';
import classes from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.LIST) {
            return (
                <div
                    className={classNames(classes.ArticleListItem, {}, [
                        className,
                        classes[view],
                    ])}
                >
                    <Card className={classes.card}>
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
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(classes.ArticleListItem, {}, [
                    className,
                    classes[view],
                ])}
            >
                <Card className={classes.card}>
                    <div className={classes.wrapperImage}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={classes.img}
                        />
                    </div>
                    <div className={classes.wrapperInfo}>
                        <Skeleton
                            width={130}
                            height={16}
                            className={classes.types}
                        />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={classes.title}
                    />
                </Card>
            </div>
        );
    },
);
