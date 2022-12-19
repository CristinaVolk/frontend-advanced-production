import React, { FC, ForwardedRef, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = forwardRef(
  (props: AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
    const {
      children,
      to,
      className,
      theme = AppLinkTheme.PRIMARY,
      ...restProps
    } = props;

    return (
         <Link
            ref={ref}
            {...restProps}
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
         >
              {children}
         </Link>
    );
  },
);
