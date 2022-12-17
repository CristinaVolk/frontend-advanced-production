import React, { memo, ReactNode } from 'react';
import { classNames, Modes } from 'shared/lib/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import classes from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const { theme } = useTheme();

  const modes: Modes = {
    [classes.opened]: isOpen,
  };

  return (
       <Portal>
            <div className={classNames(classes.Drawer, modes, [className, theme, 'app_drawer'])}>
                 <Overlay
                    className={classes.overlay}
                    onClick={onClose}
                 />
                 <div className={classes.content}>
                      {children}
                 </div>
            </div>
       </Portal>
  );
});
