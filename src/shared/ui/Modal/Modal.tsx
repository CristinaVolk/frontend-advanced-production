import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Modal.module.scss';

interface ModalProps {
	className?: string;
    children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
    isOpen?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className, children,
  } = props;

  return (
       <div className={classNames(classes.Modal, {}, [className])}>
            <div className={classes.overlay}>
                 <div className={classes.content}>
                      {children}
                 </div>
            </div>

       </div>
  );
};
