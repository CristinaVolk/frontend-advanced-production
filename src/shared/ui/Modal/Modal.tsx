import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Modal.module.scss';

interface ModalProps {
	className?: string;
    children: ReactNode
}

export const Modal = ({ children, className }: ModalProps) => (
     <div className={classNames(classes.Modal, {}, [className])}>
          <div className={classes.overlay}>
               <div className={classes.content}>
                    {children}
               </div>
          </div>

     </div>
);
