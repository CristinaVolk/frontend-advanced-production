export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';

export { articleDetailsReducer } from './model/slices/articleDetailsSlice';
export { ArticleList } from './ui/ArticleList/ArticleList';

export type { Article, ArticleSortFieldType } from './model/types/Article';

export { ArticleTypedTabs } from './ui/ArticleTypedTabs/ArticleTypedTabs';
export { getArticleDetailsData } from './model/selectors/getArticleDetails/getArticleDetails';
export {
  ArticleError, ArticleType, ArticleView, ArticleSortField, ArticleBlockType,
} from './model/const/const';
