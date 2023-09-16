import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import classes from './NotificationItem.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    notification: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;
    const content = (
        <Card className={classNames(classes.NotificationItem, {}, [className])}>
            <Text
                title={notification.title}
                text={notification.description}
                align="left"
            />
        </Card>
    );

    if (notification.href) {
        return (
            <a
                className={classes.link}
                target="_blank"
                href={notification.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return <>{content}</>;
});
