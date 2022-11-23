import React, {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';
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

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  return (
       <section
          ref={wrapperRef}
          className={classNames(classes.Page, {}, [className])}
       >
            {children}
            <div ref={triggerRef} />
       </section>
  );
});
