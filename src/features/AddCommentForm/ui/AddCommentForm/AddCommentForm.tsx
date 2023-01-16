import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import classes from './AddCommentForm.module.scss';

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
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={error}
                />
            )}

            <HStack
                data-testid="AddCommentForm"
                max
                gap="16"
                className={classNames(classes.AddCommentForm, {}, [className])}
            >
                <Input
                    data-testid="AddCommentForm.Input"
                    className={classes.input}
                    placeholder={t('enter-your-comment')}
                    value={commentText}
                    onChange={onCommentTextChange}
                />
                <Button
                    data-testid="AddCommentForm.Button"
                    theme={ButtonTheme.CREATIVE}
                    onClick={onSendCommentHandler}
                >
                    {t('send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
