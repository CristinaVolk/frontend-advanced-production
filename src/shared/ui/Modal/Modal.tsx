import React, {
  MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Modes } from 'shared/lib/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './Modal.module.scss';

const ANIMATION_DELAY = 500;

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

  const { theme } = useTheme();

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const [isMounted, setIsMounted] = useState(false);

  const [isClosing, setIsCLosing] = useState(false);

  const modes: Modes = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsCLosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsCLosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  function onKeyDownCallback(this: Window, event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }

  const onKeyDown = useCallback(onKeyDownCallback, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
       <Portal>
            <div className={classNames(classes.Modal, modes, [className, theme, 'app_modal'])}>
                 <div className={classes.overlay} onClick={closeHandler}>
                      <div className={classes.content} onClick={onContentClick}>
                           {children}
                      </div>
                 </div>
            </div>
       </Portal>
  );
};
