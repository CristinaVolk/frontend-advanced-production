import React, { ReactNode } from 'react';
import { classNames, Modes } from '../../../lib/classNames';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';
import { useTheme } from '../../../lib/hooks/useTheme/useTheme';

const ANIMATION_DELAY = 1000;

export type ModalTheme = 'primary' | 'secondary';
export type ModalAlign = 'start' | 'end' | 'center';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    lazy?: boolean;
    onClose?: () => void;
    modalTheme?: ModalTheme;
    modalAlign?: ModalAlign;
}

/**
 * deprecated
 */
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        modalTheme = '',
        modalAlign = '',
    } = props;

    const { animated, isMounted, isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: ANIMATION_DELAY,
    });

    const { theme } = useTheme();

    const modes: Modes = {
        [classes.animated]: animated,
        [classes.isVisible]: isMounted,
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(classes.Modal, modes, [
                    className,
                    theme,
                    'app_modal',
                    classes[modalAlign],
                ])}
            >
                <Overlay className={classes.overlay} onClick={close} />
                <div
                    className={classNames(classes.content, {}, [
                        classes[modalTheme],
                    ])}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
