import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import classes from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            end
            to={to}
            className={({ isActive }) =>
                classNames(classes.AppLink, { [activeClassName]: isActive }, [
                    className,
                    classes[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
