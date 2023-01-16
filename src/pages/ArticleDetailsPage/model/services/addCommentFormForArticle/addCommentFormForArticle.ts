import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { CommentErrorCodes } from '../../consts/consts';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentFormForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentFormForArticle', async (commentText, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const article = getArticleDetailsData(getState());
    const user = getUserAuthData(getState());

    if (!commentText || !article || !user) {
        return rejectWithValue(CommentErrorCodes.NO_DATA);
    }

    try {
        const response = await extra.api.post('/comments', {
            articleId: article.id,
            userId: user.id,
            text: commentText,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue(CommentErrorCodes.SERVER_DOWN);
    }
});
