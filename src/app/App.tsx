import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import { getUserIsInited, userActions } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames';

import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from '../app/providers/router';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isInited = useSelector(getUserIsInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
       <div className={classNames('app', { dark: true }, [theme])}>
            {isInited && (
            <Suspense fallback="">
                 <NavBar />
                 <div className="content-page">
                      <SideBar />
                      <AppRouter />
                 </div>
            </Suspense>
            )}
       </div>
  );
}

export default App;
