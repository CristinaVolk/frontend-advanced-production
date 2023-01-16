import { useCallback, useMemo, useState } from 'react';

interface UseHoverCallback {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
type UseHoverHook = [boolean, UseHoverCallback];

export const useHover = (): UseHoverHook => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
