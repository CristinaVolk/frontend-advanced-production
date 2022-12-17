import React, { ReactNode } from 'react';
import { classNames, Modes } from '@/shared/lib/classNames';

import { useTheme } from '@/app/providers/ThemeProvider';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

const ANIMATION_DELAY = 1000;

interface ModalProps {
	className?: string;
    children?: ReactNode;
    isOpen: boolean;
    lazy?: boolean;
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;

  const {
    animated, isMounted, isClosing, close,
  } = useModal({ isOpen, onClose, animationDelay: ANIMATION_DELAY });

  const { theme } = useTheme();

  const modes: Modes = {
    [classes.animated]: animated,
    [classes.isVisible]: isMounted,
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
       <Portal>
            <div className={classNames(classes.Modal, modes, [className, theme, 'app_modal'])}>
                 <Overlay className={classes.overlay} onClick={close} />
                 <div className={classes.content} onClick={onContentClick}>
                      {children}
                 </div>
            </div>
       </Portal>
  );
};
