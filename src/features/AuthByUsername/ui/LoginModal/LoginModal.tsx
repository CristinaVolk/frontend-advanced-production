import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

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
          className={classNames('', {}, [className])}
          lazy
          onClose={onClose}
       >
            <LoginForm />
       </Modal>
  );
};
