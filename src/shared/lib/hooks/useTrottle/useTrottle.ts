import { useCallback, useRef } from 'react';

export const useTrottle = (
    callback: (...args: any[]) => void,
    delay: number,
) => {
    const trottle = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!trottle.current) {
                callback(...args);
                trottle.current = true;
            }

            setTimeout(() => {
                trottle.current = false;
            }, delay);
        },
        [callback, delay],
    );
};
