import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import NotificationIconRedesigned from '@/shared/assets/icons/notification.svg';
import { NotificationsList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames';
import { Drawer as DrawerDeprecated } from '@/shared/ui/redesigned/DragableDrawer';
import classes from './NotificationButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Icon
            Svg={NotificationIconRedesigned}
            clickable
            onClick={onOpenDrawer}
        />
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(classes.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                >
                    <NotificationsList className={classes.notifications} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}

                <DrawerDeprecated isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </DrawerDeprecated>
            </MobileView>
        </div>
    );
});
