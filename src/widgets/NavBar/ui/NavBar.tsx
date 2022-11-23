import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slices/userSlice';
import classes from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const openHandler = useCallback(() => {
    onOpenModal();
  }, [onOpenModal]);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
         <nav className={classNames(classes.NavBar, {}, [className])}>
              <Button
                 className={classes.links}
                 theme={ButtonTheme.BACKGROUND}
                 onClick={onLogout}
              >
                   {t('Logout')}
              </Button>
         </nav>
    );
  }

  return (
       <nav className={classNames(classes.NavBar, {}, [className])}>
            <Button
               className={classes.links}
               theme={ButtonTheme.BACKGROUND}
               onClick={openHandler}
            >
                 {t('Login')}
            </Button>
            {isAuthModal && (
            <LoginModal
               isOpen={isAuthModal}
               onClose={onCloseModal}
               className={
              classNames(
                classes.LoginModal,
                {},
                [className],
              )
            }
            >
                 {t('Login')}
            </LoginModal>
            )}
       </nav>
  );
});
