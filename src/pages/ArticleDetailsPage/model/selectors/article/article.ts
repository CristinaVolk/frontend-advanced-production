import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

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
