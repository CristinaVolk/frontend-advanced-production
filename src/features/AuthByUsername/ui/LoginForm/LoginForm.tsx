import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginFormIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginFormIsLoading';
import classes from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginFormIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(classes.LoginForm, {}, [className])}>
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
                                   className="input"
                                   placeholder={t('EnterUsername')}
                                   autofocus
                                   onChange={onChangeUsername}
                                   value={username}
                                />
                                <Input
                                   type="password"
                                   placeholder={t('EnterPassword')}
                                   className="input"
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
