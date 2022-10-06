import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { theme } = useTheme();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
       <div className={classNames(classes.NavBar, {}, [className])}>
            <Button
               className={classes.links}
               theme={ButtonTheme.BACKGROUND}
               onClick={onToggleModal}
            >
                 {t('Login')}
            </Button>
            <Modal
               className={theme}
               isOpen={isAuthModal}
               onClose={onToggleModal}
            >
                 {t('Login')}
            </Modal>
       </div>
  );
}
