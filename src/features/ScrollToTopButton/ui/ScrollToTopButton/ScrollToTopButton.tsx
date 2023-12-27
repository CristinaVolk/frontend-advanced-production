import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Icon
            Svg={CircleUpIcon}
            clickable
            width={32}
            height={32}
            onClick={onClick}
            className={classNames(classes.ScrollToTopButton, {}, [className])}
        />
    );
});
