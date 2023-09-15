import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-icon.svg';
import NotificationIconRedesigned from '@/shared/assets/icons/notification.svg';
import { NotificationsList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/DragableDrawer';
import classes from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIconRedesigned}
                    clickable
                    onClick={onOpenDrawer}
                />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(
                                classes.NotificationButton,
                                {},
                                [className],
                            )}
                            trigger={trigger}
                        >
                            <NotificationsList
                                className={classes.notifications}
                            />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(
                                classes.NotificationButton,
                                {},
                                [className],
                            )}
                            trigger={trigger}
                        >
                            <NotificationsList
                                className={classes.notifications}
                            />
                        </PopoverDeprecated>
                    }
                />
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
