import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePaths } from '@/shared/config/routes/routes';

import { HStack, VStack } from '@/shared/ui/Stack';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';

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
            max
            gap="16"
            className={classNames(
              classes.CommentCard,
              {},
              [className, classes.loading],
            )}
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
       <VStack max className={classNames(classes.CommentCard, {}, [className])}>
            {comment && comment.user && (
            <>
                 <AppLink
                    to={`${RoutePaths[AppRoutes.PROFILE]}${comment.user.id}`}
                 >
                      <HStack gap="16">
                           {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                           <Text title={comment.user.username} />
                      </HStack>

                 </AppLink>
                 <Text text={comment.text} />
            </>
            )}
       </VStack>
  );
});
