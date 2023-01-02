import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { buildSelector } from '@/shared/lib/store';

export const getCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (userAuth, articleData) => {
    if (!userAuth || !articleData) {
      return false;
    }
    return userAuth?.id === articleData?.user.id;
  },
);

export const [getCanEditHook] = buildSelector(getCanEditArticle);
