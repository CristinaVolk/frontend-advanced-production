import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar as AvatarRedesigned } from '@/shared/ui/redesigned/Avatar';

import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink as AppLinkRedesigned } from '@/shared/ui/redesigned/AppLink';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                max
                gap="16"
                className={classNames(classes.CommentCard, {}, [
                    className,
                    classes.loading,
                ])}
            >
                <HStack gap="16">
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton width="100%" height={50} />
            </VStack>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card border="round" cardPaddings="24" max>
                    <VStack
                        data-testid="CommentCard.Content"
                        max
                        className={classNames(
                            classes.CommentCardRedesigned,
                            {},
                            [className],
                        )}
                    >
                        {comment && comment.user && (
                            <>
                                <AppLinkRedesigned
                                    to={getRouteProfile(comment.user.id)}
                                >
                                    <HStack gap="8">
                                        {comment.user.avatar ? (
                                            <AvatarRedesigned
                                                size={30}
                                                src={comment.user.avatar}
                                            />
                                        ) : null}
                                        <TextRedesigned
                                            bold
                                            title={comment.user.username}
                                        />
                                    </HStack>
                                </AppLinkRedesigned>
                                <TextRedesigned text={comment.text} />
                            </>
                        )}
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    max
                    className={classNames(classes.CommentCard, {}, [className])}
                >
                    {comment && comment.user && (
                        <>
                            <AppLinkDeprecated
                                to={getRouteProfile(comment.user.id)}
                            >
                                <HStack gap="16">
                                    {comment.user.avatar ? (
                                        <AvatarDeprecated
                                            size={30}
                                            src={comment.user.avatar}
                                        />
                                    ) : null}
                                    <TextRedesigned
                                        title={comment.user.username}
                                    />
                                </HStack>
                            </AppLinkDeprecated>
                            <TextRedesigned text={comment.text} />
                        </>
                    )}
                </VStack>
            }
        />
    );
});
