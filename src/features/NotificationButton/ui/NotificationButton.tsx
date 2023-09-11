import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Popover } from '@/shared/ui/deprecated/Popups';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import { NotificationsList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames';
import { Drawer } from '@/shared/ui/deprecated/DragableDrawer';
import classes from './NotificationButton.module.scss';

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
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} />
        </Button>
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

                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
});
