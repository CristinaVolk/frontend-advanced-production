import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { getUserAuthData } from '@/entities/User';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import classes from './NavBar.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';

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

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => classes.NavBarRedesigned,
        off: () => classes.NavBarDeprecated,
    });

    if (authData) {
        return (
            <nav className={classNames(mainClass, {}, [className])}>
                <HStack gap="16" className={classes.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </nav>
        );
    }

    return (
        <nav className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ButtonRedesigned
                        className={classes.loginBtn}
                        variant="clear"
                        onClick={openHandler}
                    >
                        {' '}
                        {t('Login')}
                    </ButtonRedesigned>
                }
                off={
                    <ButtonDeprecated
                        className={classes.loginBtn}
                        theme={ButtonTheme.BACKGROUND}
                        onClick={openHandler}
                    >
                        {t('Login')}
                    </ButtonDeprecated>
                }
            />

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
                className={classNames(classes.LoginModal, {}, [className])}
            >
                {t('Login')}
            </LoginModal>
        </nav>
    );
});
