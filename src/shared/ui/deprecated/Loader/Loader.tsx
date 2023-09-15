import React from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={className}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
