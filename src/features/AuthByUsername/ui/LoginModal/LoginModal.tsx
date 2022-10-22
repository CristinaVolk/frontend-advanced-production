import React, { FC, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import LoginAsync from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Loader } from 'shared/ui/Loader/Loader';

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
            <Suspense fallback={<Loader />}>
                 <LoginAsync />
            </Suspense>
       </Modal>
  );
};
