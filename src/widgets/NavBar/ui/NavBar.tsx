import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { LoginModal } from '@/features/AuthByUsername';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePaths } from '@/shared/config/routes/routes';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { getUserAuthData } from '@/entities/User';
import { AvatarDropdown } from '@/features/AvatarDropdown/ui/AvatarDropdown';
import classes from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const openHandler = useCallback(() => {
    onOpenModal();
  }, [onOpenModal]);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  if (authData) {
    return (
         <nav className={classNames(classes.NavBar, {}, [className])}>
              <Text
                 className={classes.appName}
                 title={t('Volk app')}
                 theme={TextTheme.INVERTED}
              />

              <HStack gap="16" className={classes.actions}>
                   <AppLink
                      to={RoutePaths[AppRoutes.ARTICLE_CREATE]}
                      theme={AppLinkTheme.PRIMARY}
                      className={classes.createArticle}
                   >
                        {t('create-article')}
                   </AppLink>
                   <HStack gap="16" className={classes.actions} />

                   <NotificationButton />
                   <AvatarDropdown />
              </HStack>
         </nav>
    );
  }

  return (
       <nav className={classNames(classes.NavBar, {}, [className])}>
            <Button
               className={classes.loginBtn}
               theme={ButtonTheme.BACKGROUND}
               onClick={openHandler}
            >
                 {t('Login')}
            </Button>

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
       </nav>
  );
});
