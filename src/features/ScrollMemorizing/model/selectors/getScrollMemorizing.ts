import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollMemorizing = (state: StateSchema) => state.scrollMemorizing.scroll;

export const getScrollMemorizingByPath = createSelector(
  getScrollMemorizing,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
