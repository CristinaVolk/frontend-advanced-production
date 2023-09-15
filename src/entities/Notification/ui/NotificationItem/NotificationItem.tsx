import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import classes from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    notification: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(classes.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text
                        title={notification.title}
                        text={notification.description}
                        align="left"
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames(classes.NotificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.OUTLINED}
                >
                    <TextDeprecated
                        title={notification.title}
                        text={notification.description}
                    />
                </CardDeprecated>
            }
        />
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
