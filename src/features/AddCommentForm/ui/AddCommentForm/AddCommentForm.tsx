import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';

import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import classes from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value?: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('add-comment-form');
    const error = useSelector(getAddCommentFormError);
    const commentText = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer,
    };

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendCommentHandler = useCallback(() => {
        onSendComment(commentText);
        onCommentTextChange('');
    }, [commentText, onCommentTextChange, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            {error && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <TextRedesigned
                            variant="error"
                            align="center"
                            text={error}
                        />
                    }
                    off={
                        <TextDeprecated
                            theme={TextTheme.ERROR}
                            align={TextAlign.CENTER}
                            text={error}
                        />
                    }
                />
            )}

            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card cardPaddings="24" max border="round">
                        <HStack
                            data-testid="AddCommentForm"
                            justify="between"
                            max
                            gap="16"
                            className={classNames(
                                classes.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <InputRedesigned
                                data-testid="AddCommentForm.Input"
                                className={classes.input}
                                placeholder={t('enter-your-comment')}
                                value={commentText}
                                onChange={onCommentTextChange}
                            />
                            <ButtonRedesigned
                                data-testid="AddCommentForm.Button"
                                onClick={onSendCommentHandler}
                            >
                                {t('send')}
                            </ButtonRedesigned>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        data-testid="AddCommentForm"
                        max
                        gap="16"
                        className={classNames(classes.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            data-testid="AddCommentForm.Input"
                            className={classes.input}
                            placeholder={t('enter-your-comment')}
                            value={commentText}
                            onChange={onCommentTextChange}
                        />
                        <ButtonDeprecated
                            data-testid="AddCommentForm.Button"
                            theme={ButtonTheme.CREATIVE}
                            onClick={onSendCommentHandler}
                        >
                            {t('send')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
