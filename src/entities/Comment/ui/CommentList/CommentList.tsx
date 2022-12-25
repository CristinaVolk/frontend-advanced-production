import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames';
import { VStack } from '@/shared/ui/Stack';

import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/Comment';

interface CommentListProps {
  comments?: Array<Comment>;
  isLoading?: boolean;
  className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
         <VStack
            max
            gap="8"
            className={classNames(
              '',
              {},
              [className],
            )}
         >
              <CommentCard isLoading={isLoading} />
              <CommentCard isLoading={isLoading} />
         </VStack>
    );
  }

  return (
       <VStack
          gap="8"
          max
          className={classNames('', {}, [className])}
       >
            {(comments?.length === 0)
              ? <Text title={t('No comments yet')} />
              : comments?.map(
                (commentItem) => (
                     <CommentCard
                        isLoading={isLoading}
                        key={commentItem.id}
                        comment={commentItem}
                     />
                ),
              )}
       </VStack>
  );
});
