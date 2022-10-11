import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import classes from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
       <div className={classNames(classes.NavBar, {}, [className])}>
            <Button
               className={classes.links}
               theme={ButtonTheme.BACKGROUND}
               onClick={onOpenModal}
            >
                 {t('Login')}
            </Button>
            <LoginModal
               isOpen={isAuthModal}
               onClose={onCloseModal}
            >
                 {t('Login')}
            </LoginModal>
       </div>
  );
}
