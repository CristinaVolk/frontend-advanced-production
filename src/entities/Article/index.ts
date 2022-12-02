export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';

export { articleDetailsReducer } from './model/slices/articleDetailsSlice';
export { ArticleList } from './ui/ArticleList/ArticleList';
export {
  ArticleSortField, ArticleType, ArticleView, Article,
} from './model/types/Article';

export { ArticleTypedTabs } from './ui/ArticleTypedTabs/ArticleTypedTabs';
export { getArticleDetailsData } from './model/selectors/getArticleDetails/getArticleDetails';
