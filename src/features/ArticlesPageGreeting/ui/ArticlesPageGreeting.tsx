import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, userJsonSettingsSelector } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/DragableDrawer';

export const ArticlesPageGreeting = memo(() => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();
    const { hasArticlesPageGreetingsBeenOpened } = userJsonSettingsSelector();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!hasArticlesPageGreetingsBeenOpened) {
            setIsOpen(true);
            dispatch(
                saveJsonSettings({ hasArticlesPageGreetingsBeenOpened: true }),
            );
        }
    }, [dispatch, hasArticlesPageGreetingsBeenOpened]);

    const onClose = () => setIsOpen(false);
    const modalContent = (
        <Text
            title={t('Welcome to the Articles Page')}
            text={t('Here you can read the articles of different topics')}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {modalContent}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {modalContent}
        </Modal>
    );
});
