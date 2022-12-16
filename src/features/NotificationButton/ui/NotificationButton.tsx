import React, { memo } from 'react';

import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { NotificationsList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames';
import classes from './NotificationButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
       <Popover
          className={classNames(classes.NotificationButton, {}, [className])}
          trigger={(
               <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} />
               </Button>
		)}
       >
            <NotificationsList className={classes.notifications} />
       </Popover>
  );
});
