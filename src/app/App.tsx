import React, { Suspense, useEffect } from 'react';

import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import { getIsInitedHook, initAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames';

import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from '../app/providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

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
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <NavBar />
                        <div className="content-page">
                            <SideBar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('app_redesigned', {}, [theme])}>
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
