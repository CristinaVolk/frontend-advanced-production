import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import classes from './Modal.module.scss';

const ANIMATION_DELAY = 500;
type OnCloseFunc = () => void;

interface ModalProps {
	className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: OnCloseFunc
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setIsCLosing] = useState(false);

  const modes: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const closeHandler: OnCloseFunc = useCallback(() => {
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

  function onKeyDownCallback(this: typeof Window, event: KeyboardEvent) {
    console.log('inside of onKeyDown');

    if (event.key === 'Escape') {
      closeHandler();
    }
  }

  const onKeyDown = useCallback(onKeyDownCallback, [closeHandler]);

  useEffect(() => {
    console.log(className);
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [className, isOpen, onKeyDown]);

  return (
       <Portal>
            <div className={classNames(classes.Modal, modes, [className])}>
                 <div className={classes.overlay} onClick={closeHandler}>
                      <div className={classes.content} onClick={onContentClick}>
                           {children}
                      </div>
                 </div>

            </div>
       </Portal>
  );
};
