import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
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
                           />
                           <Input
                              type="password"
                              placeholder={t('EnterPassword')}
                              className="input"
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
};
