import { lazy } from 'react';

export const LoginAsync = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./LoginForm')), 1500);
        }),
);
