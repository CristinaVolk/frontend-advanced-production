import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
    animationDelay?: number;
}

export function useModal(props: UseModalProps) {
    const { isOpen, onClose, animationDelay } = props;

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsCLosing] = useState(false);
    const [animated, setAnimated] = useState(false);

    const close = useCallback(() => {
        if (onClose) {
            setIsCLosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsCLosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    function onKeyDownCallback(this: Window, event: KeyboardEvent) {
        if (event.key === 'Escape') {
            close();
        }
    }

    const onKeyDown = useCallback(onKeyDownCallback, [close]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);

            setTimeout(() => {
                setAnimated(true);
            }, animationDelay);
        }
    }, [animationDelay, isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        animated,
        isClosing,
        isMounted,
        close,
    };
}
