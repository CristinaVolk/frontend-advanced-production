import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/Comment';
import classes from './CommentList.module.scss';

interface CommentListProps {
  comments?: Array<Comment>;
  isLoading?: boolean;
  className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
       <div className={classNames(classes.CommentList, {}, [className])}>
            {t('Comment List')}
            {(comments?.length === 0)
              ? <Text className={classes.commentTitle} title={t('No comments yet')} />
              : comments?.map(
                (commentItem) => (
                     <CommentCard
                        isLoading={isLoading}
                        className={classes.comment}
                        key={commentItem.id}
                        comment={commentItem}
                     />
                ),
              )}
       </div>
  );
});
