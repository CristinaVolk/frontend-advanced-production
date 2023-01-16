export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';

export { articleDetailsReducer } from './model/slices/articleDetailsSlice';
export { ArticleList } from './ui/ArticleList/ArticleList';

export type { Article } from './model/types/Article';

export {
    getArticleDetailsData,
    getArticleDetailsHook,
} from './model/selectors/getArticleDetails/getArticleDetails';
export {
    ArticleError,
    ArticleType,
    ArticleView,
    ArticleBlockType,
} from './model/const/const';
