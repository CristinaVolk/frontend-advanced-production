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
            <Input
               className={classes.input}
               placeholder={t('EnterUsername')}
               autofocus
            />
            <Input
               type="password"
               placeholder={t('EnterPassword')}
               className={classes.input}
            />
            <Button
               className={classes.loginButton}
               theme={ButtonTheme.CLEAR}
            >
                 {t('Login')}
            </Button>
       </div>
  );
};
