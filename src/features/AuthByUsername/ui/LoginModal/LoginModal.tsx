import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import classes from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: ()=>void
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
       <Modal
          isOpen={isOpen}
          className={classNames(classes.LoginModal, {}, [className])}
          onClose={onClose}
       >
            <LoginForm />
       </Modal>
  );
};
