import React, {
  memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollMemorizingByPath, scrollMemorizingActions } from 'features/ScrollMemorizing';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useTrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
import { useInfiniteScroll } from '../../lib/hooks/useInfiniteScroll/useInfiniteScroll';
import classes from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: ()=>void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((
    state:StateSchema,
  ) => getScrollMemorizingByPath(state, pathname));

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useTrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollMemorizingActions.setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 1000);

  return (
       <section
          ref={wrapperRef}
          className={classNames(classes.Page, {}, [className])}
          onScroll={onScroll}
       >
            {children}
            {onScrollEnd ? <div className={classes.trigger} ref={triggerRef} /> : null}
       </section>
  );
});
