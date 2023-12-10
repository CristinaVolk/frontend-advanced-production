import React, { Suspense, useEffect } from 'react';

import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import { getIsInitedHook, initAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames';

import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from '../app/providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeatures } from '@/shared/lib/features';

function App() {
    const { theme } = useTheme();
    const isInited = getIsInitedHook();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isInited) {
        return <Loader />;
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

export default App;
