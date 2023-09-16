import React, {
    memo,
    MutableRefObject,
    ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import {
    getScrollMemorizingByPath,
    useScrollMemorizingActions,
} from '@/features/ScrollMemorizing';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTrottle } from '@/shared/lib/hooks/useTrottle/useTrottle';
import { PAGE_ID } from '@/shared/const/common';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import classes from './Page.module.scss';
import { TestProps } from '@/shared/types/TestProps';

interface PageProps extends TestProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { children, onScrollEnd, className } = props;

    const { setScrollPosition } = useScrollMemorizingActions();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollMemorizingByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useTrottle((event: UIEvent<HTMLDivElement>) => {
        setScrollPosition({
            position: event.currentTarget.scrollTop,
            path: pathname,
        });
    }, 500);

    return (
        <main
            id={PAGE_ID}
            ref={wrapperRef}
            className={classNames(classes.PageRedesigned, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={classes.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
