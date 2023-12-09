import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { useNotifications } from '../../model/api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    );
});
