import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUsernameHook } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginErrorHook } from '../../model/selectors/getLoginError/getLoginError';
import { getIsLoadingHook } from '../../model/selectors/getLoginIsLoading/getLoginFormIsLoading';
import { loginReducer, useLoginActions } from '../../model/slices/loginSlice';
import classes from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getPasswordHook } from '../../model/selectors/getLoginPassword/getLoginPassword';

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
    const { setUsername, setPassword } = useLoginActions();

    const username = getUsernameHook();
    const password = getPasswordHook();
    const isLoading = getIsLoadingHook();
    const error = getLoginErrorHook();

    const [isClosing, setIsClosing] = useState(false);

    const onChangeUsername = useCallback(
        (value: string) => {
            setUsername(value);
        },
        [setUsername],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            setPassword(value);
        },
        [setPassword],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            setIsClosing(true);
            setTimeout(() => {
                onSuccess();
            }, 3000);
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
                className={classNames(
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
                        {error && (
                            <Text theme={TextTheme.ERROR} text={t(error)} />
                        )}
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
