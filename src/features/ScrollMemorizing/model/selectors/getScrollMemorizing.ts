import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollMemorizing = (state: StateSchema) => state.scrollMemorizing.scroll;

export const getScrollMemorizingByPath = createSelector(
  getScrollMemorizing,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
