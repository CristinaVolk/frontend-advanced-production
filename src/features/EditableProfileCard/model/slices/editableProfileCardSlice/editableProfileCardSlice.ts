import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorCodes } from '@/shared/const/common';

import { ValidateProfileError } from '../../consts/consts';
import {
    EditableProfile,
    EditableProfileCardSchema,
} from '../../types/EditableProfile';

import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { buildSlice } from '@/shared/lib/store';

const initialState: EditableProfileCardSchema = {
    formData: undefined,
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
    validateProfileErrors: undefined,
};

export const editableProfileCardSlice = buildSlice({
    name: 'editableProfileSliceCard',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.data;
            state.validateProfileErrors = undefined;
        },
        updateData: (state, action: PayloadAction<EditableProfile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<EditableProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.formData = action.payload;
                },
            )
            .addCase(
                fetchProfileData.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            )
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<EditableProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.formData = action.payload;
                    state.readonly = true;
                },
            )
            .addCase(
                updateProfileData.rejected,
                (
                    state,
                    action: PayloadAction<
                        Array<ValidateProfileError | ErrorCodes> | undefined
                    >,
                ) => {
                    state.isLoading = false;
                    state.validateProfileErrors = action.payload;
                },
            );
    },
});

export const {
    actions: editableProfileCardActions,
    reducer: editableProfileCardReducer,
    useActions: useEditableProfileCardActions,
} = editableProfileCardSlice;
