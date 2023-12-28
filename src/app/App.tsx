import React, { Suspense, useEffect } from 'react';

import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import { getIsInitedHook, initAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames';

import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from '../app/providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { useAppToolbar } from './lib/useAppToolbar/useAppToolbar';
import { withTheme } from '../app/providers/ThemeProvider/ui/withTheme';

function App() {
    const { theme } = useTheme();
    const isInited = getIsInitedHook();
    const dispatch = useAppDispatch();
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!isInited) {
            dispatch(initAuthData());
        }
    }, [dispatch, isInited]);

    if (!isInited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />{' '}
                    </div>
                }
                off={<Loader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<NavBar />}
                            content={<AppRouter />}
                            sidebar={<SideBar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<NavBar />}
                            content={<AppRouter />}
                            sidebar={<SideBar />}
                        />
                    </Suspense>
                </div>
            }
        />
    );
}

export default withTheme(App);
