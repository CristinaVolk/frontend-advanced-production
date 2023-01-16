import { combineReducers } from 'redux';
import { articleDetailsRecommendationsReducer } from './articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    });
