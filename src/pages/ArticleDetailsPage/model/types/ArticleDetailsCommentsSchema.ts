import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
  isLoading?: boolean;
  error?: string;
}

export enum CommentErrorCodes {
  SERVER_DOWN = 'SERVER_DOWN',
  NO_DATA = 'NO_DATA'
}
