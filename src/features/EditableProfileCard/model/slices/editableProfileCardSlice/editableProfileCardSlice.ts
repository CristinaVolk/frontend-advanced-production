import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileCardSchema, Profile } from '../../types/Profile';

import { updateProfileData } from '../../services/updateProfileData/updateProfileData';

const initialState: EditableProfileCardSchema = {
  formData: undefined,
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const editableProfileCardSlice = createSlice({
  name: 'editableProfileSliceCard',
  initialState,
  reducers: {
    setInitialFormData: (state, action: PayloadAction<Profile>) => {
      state.formData = action.payload;
      state.data = action.payload;
    },
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.formData = state.data;
    },
    updateData: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.formData = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
