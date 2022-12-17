import React, { memo, ReactNode } from 'react';
import { classNames, Modes } from 'shared/lib/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import classes from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;

  const {
    isMounted, isClosing, close,
  } = useModal({ isOpen, onClose, animationDelay: 300 });

  const { theme } = useTheme();

  const modes: Modes = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
       <Portal>
            <div className={classNames(classes.Drawer, modes, [className, theme, 'app_drawer'])}>
                 <Overlay
                    onClick={close}
                 />
                 <div className={classes.content}>
                      {children}
                 </div>
            </div>
       </Portal>
  );
});
