import { PayloadAction } from '@reduxjs/toolkit';
import { ScrollMemorizingSchema } from '../types/ScrollSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: ScrollMemorizingSchema = {
  scroll: {},
};

export const scrollMemorizingSlice = buildSlice({
  name: 'scrollMemorizing',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const {
  actions: scrollMemorizingActions,
  reducer: scrollMemorizingReducer,
  useActions: useScrollMemorizingActions,
} = scrollMemorizingSlice;
