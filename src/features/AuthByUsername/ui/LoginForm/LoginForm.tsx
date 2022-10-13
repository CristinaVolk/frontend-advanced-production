import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { loginActions } from 'features/AuthByUsername/model/slices/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loginForm = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  return (
       <div className={classNames(classes.LoginForm, {}, [className])}>
            <div className={classes.container}>
                 <div className={classes.leftBox}>
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
                              value={loginForm.username}
                           />
                           <Input
                              type="password"
                              placeholder={t('EnterPassword')}
                              className="input"
                              onChange={onChangePassword}
                              value={loginForm.password}
                           />
                      </div>
                      <Button
                         className={classes.loginButton}
                         theme={ButtonTheme.CLEAR}
                      >
                           {t('Login')}
                      </Button>
                 </div>
            </div>
       </div>
  );
});
