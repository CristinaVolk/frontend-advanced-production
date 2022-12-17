import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import classes from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: NotificationSchema
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props;
  const content = (
       <Card
          className={classNames(classes.NotificationItem, {}, [className])}
          theme={CardTheme.OUTLINED}
       >
            <Text title={notification.title} text={notification.description} />
       </Card>

  );

  if (notification.href) {
    return (
         <a className={classes.link} target="_blank" href={notification.href} rel="noreferrer">
              {content}
         </a>
    );
  }

  return <>{ content }</>;
});
