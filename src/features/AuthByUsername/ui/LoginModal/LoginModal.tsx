import React, { FC, ReactNode, Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui/Loader/Loader';

import { LoginAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const {
    className, isOpen, onClose, children,
  } = props;

  return (
       <Modal
          isOpen={isOpen}
          className={classNames('', {}, [className])}
          lazy
          onClose={onClose}
       >
            <Suspense fallback={<Loader />}>
                 <LoginAsync onSuccess={onClose} />
                 {children}
            </Suspense>
       </Modal>
  );
};
