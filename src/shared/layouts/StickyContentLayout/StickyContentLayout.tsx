import { memo, ReactElement } from 'react';
import classes from './StickyContentLayout.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
        <div
            className={classNames(classes.StickyContentLayout, {}, [className])}
        >
            {left && <div className={classes.left}>{left}</div>}
            <div className={classes.content}>{content}</div>
            {right && <div className={classes.right}>{right}</div>}
        </div>
    );
});
