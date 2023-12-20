import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';

import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
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
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

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
    const forceUpdate = useForceUpdate();

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
                forceUpdate();
            }, 3000);
        }
    }, [dispatch, username, password, onSuccess, forceUpdate]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            classes.LoginForm,
                            { [classes.isClosing]: isClosing },
                            [className],
                        )}
                    >
                        <div className={classes.container}>
                            <div className={classes.leftBox}>
                                <TextRedesigned title={t('Login')} />

                                <div className={classes.login}>
                                    {t('Login')}
                                </div>
                                <div className={classes.eula}>
                                    {t('AgreementTerms')}
                                </div>
                            </div>
                            <div className={classes.rightBox}>
                                <VStack gap="8">
                                    <InputRedesigned
                                        textColor="secondary"
                                        placeholder={t('EnterUsername')}
                                        autofocus
                                        onChange={onChangeUsername}
                                        value={username}
                                    />
                                    <InputRedesigned
                                        type="password"
                                        placeholder={t('EnterPassword')}
                                        textColor="secondary"
                                        onChange={onChangePassword}
                                        value={password}
                                    />
                                </VStack>
                                {error && (
                                    <TextRedesigned
                                        variant="error"
                                        text={t(error)}
                                    />
                                )}
                                <ButtonRedesigned
                                    className={classes.loginButton}
                                    variant="clear"
                                    onClick={onLoginClick}
                                    disabled={isLoading}
                                >
                                    {t('Login')}
                                </ButtonRedesigned>
                            </div>
                        </div>
                    </div>
                }
                off={
                    <div
                        className={classNames(
                            classes.LoginForm,
                            { [classes.isClosing]: isClosing },
                            [className],
                        )}
                    >
                        <div className={classes.container}>
                            <div className={classes.leftBox}>
                                <TextDeprecated title={t('Login')} />

                                <div className={classes.login}>
                                    {t('Login')}
                                </div>
                                <div className={classes.eula}>
                                    {t('AgreementTerms')}
                                </div>
                            </div>
                            <div className={classes.rightBox}>
                                <div>
                                    <InputDeprecated
                                        textColor="secondary"
                                        placeholder={t('EnterUsername')}
                                        autofocus
                                        onChange={onChangeUsername}
                                        value={username}
                                    />
                                    <InputDeprecated
                                        type="password"
                                        placeholder={t('EnterPassword')}
                                        textColor="secondary"
                                        onChange={onChangePassword}
                                        value={password}
                                    />
                                </div>
                                {error && (
                                    <TextDeprecated
                                        theme={TextTheme.ERROR}
                                        text={t(error)}
                                    />
                                )}
                                <ButtonDeprecated
                                    className={classes.loginButton}
                                    theme={ButtonTheme.CLEAR}
                                    onClick={onLoginClick}
                                    disabled={isLoading}
                                >
                                    {t('Login')}
                                </ButtonDeprecated>
                            </div>
                        </div>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
