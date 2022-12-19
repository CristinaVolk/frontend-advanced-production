import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import {
  DynamicModuleLoader, ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginFormIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginFormIsLoading';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import classes from './LoginForm.module.scss';
import {
  loginByUsername,
} from '@/features/AuthByUsername/model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
	className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginFormIsLoading);
  const error = useSelector(getLoginError);
  const [isClosing, setIsClosing] = useState(false);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      setIsClosing(true);
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }
  }, [dispatch, username, password, onSuccess]);

  return (
       <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(
              classes.LoginForm,
              { [classes.isClosing]: isClosing },
              [className],
            )}
            >
                 <div className={classes.container}>

                      <div className={classes.leftBox}>
                           <Text title={t('Login')} />

                           <div className={classes.login}>{t('Login')}</div>
                           <div className={classes.eula}>
                                {t('AgreementTerms')}
                           </div>
                      </div>
                      <div className={classes.rightBox}>
                           <div>
                                <Input
                                   textColor="secondary"
                                   placeholder={t('EnterUsername')}
                                   autofocus
                                   onChange={onChangeUsername}
                                   value={username}
                                />
                                <Input
                                   type="password"
                                   placeholder={t('EnterPassword')}
                                   textColor="secondary"
                                   onChange={onChangePassword}
                                   value={password}
                                />
                           </div>
                           {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
                           <Button
                              className={classes.loginButton}
                              theme={ButtonTheme.CLEAR}
                              onClick={onLoginClick}
                              disabled={isLoading}
                           >
                                {t('Login')}
                           </Button>
                      </div>
                 </div>
            </div>

       </DynamicModuleLoader>
  );
});

export default LoginForm;
