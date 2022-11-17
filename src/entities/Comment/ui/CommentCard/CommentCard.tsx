import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePaths } from 'shared/config/routes/routes';

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
         <div className={classNames(
           classes.CommentCard,
           {},
           [className, classes.loading],
         )}
         >
              <div className={classes.header}>
                   <Skeleton width={30} height={30} border="50%" />
                   <Skeleton className={classes.username} width={100} height={16} />
              </div>
              <Skeleton width="100%" height={50} className={classes.text} />
         </div>
    );
  }

  return (
       <div className={classNames(classes.CommentCard, {}, [className])}>
            {comment && comment.user && (
            <>
                 <AppLink
                    to={`${RoutePaths[AppRoutes.PROFILE]}${comment.user.id}`}
                    className={classes.header}
                 >
                      {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                      <Text
                         className={classes.username}
                         title={comment.user.username}
                      />
                 </AppLink>
                 <Text
                    className={classes.text}
                    text={comment.text}
                 />
            </>
            )}
       </div>
  );
});
