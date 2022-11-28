import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollMemorizingSchema } from '../types/ScrollSchema';

const initialState: ScrollMemorizingSchema = {
  scroll: {},
};

export const scrollMemorizingSlice = createSlice({
  name: 'scrollMemorizing',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollMemorizingActions } = scrollMemorizingSlice;
export const { reducer: scrollMemorizingReducer } = scrollMemorizingSlice;
