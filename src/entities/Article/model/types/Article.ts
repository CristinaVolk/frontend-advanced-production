import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../const/const';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: Array<string>;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock =
    | ArticleTextBlock
    | ArticleCodeBlock
    | ArticleImageBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: Array<ArticleType>;
    blocks: Array<ArticleBlock>;
    user: User;
}
