import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}:UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const triggerRefObg = triggerRef;
    const wrapperRefObg = wrapperRef;

    if (callback) {
      const options = {
        root: wrapperRefObg.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRefObg.current);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line no-debugger
        debugger;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRefObg.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
