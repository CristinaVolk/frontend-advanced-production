import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const triggerRefObg = triggerRef.current;
        const wrapperRefObg = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperRefObg,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerRefObg);
        }

        return () => {
            if (observer.current && triggerRefObg) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerRefObg);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
