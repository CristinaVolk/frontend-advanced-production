import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';

import { HStack, VStack } from '@/shared/ui/Stack';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

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
        <VStack
            data-testid="CommentCard.Content"
            max
            className={classNames(classes.CommentCard, {}, [className])}
        >
            {comment && comment.user && (
                <>
                    <AppLink to={getRouteProfile(comment.user.id)}>
                        <HStack gap="16">
                            {comment.user.avatar ? (
                                <Avatar size={30} src={comment.user.avatar} />
                            ) : null}
                            <Text title={comment.user.username} />
                        </HStack>
                    </AppLink>
                    <Text text={comment.text} />
                </>
            )}
        </VStack>
    );
});
