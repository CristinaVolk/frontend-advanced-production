import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/Article';
import {
  ArticleCodeBlockComponent,
} from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const articleDetailsData = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
             <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={classes.block}
             />
        );
      case ArticleBlockType.IMAGE:
        return (
             <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={classes.block}
             />
        );
      case ArticleBlockType.TEXT:
        return (
             <ArticleTextBlockComponent
                key={block.id}
                className={classes.block}
                block={block}
             />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  let content;

  if (isLoading) {
    content = (
         <div>
              <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
              <Skeleton className={classes.title} width={200} height={32} />
              <Skeleton className={classes.skeleton} width={600} height={24} />
              <Skeleton className={classes.skeleton} width="100%" height={200} />
              <Skeleton className={classes.skeleton} width="100%" height={200} />
         </div>
    );
  } else if (error) {
    content = <Text theme={TextTheme.ERROR} text={t(error)} align={TextAlign.CENTER} />;
  } else {
    content = (
         <>
              <div className={classes.ArticleWrapper}>
                   <Avatar
                      size={200}
                      src={articleDetailsData?.img}
                      alt={articleDetailsData?.title}
                      className={classes.Avatar}
                   />
                   <Text
                      className={classes.title}
                      title={articleDetailsData?.title}
                      text={articleDetailsData?.subtitle}
                      size={TextSize.L}
                   />
                   <div className={classes.articleParticles}>
                        <Icon Svg={EyeIcon} />
                        <Text size={TextSize.M} text={String(articleDetailsData?.views)} />
                   </div>
                   <div className={classes.articleParticles}>
                        <Icon Svg={CalendarIcon} />
                        <Text size={TextSize.M} text={articleDetailsData?.createdAt} />
                   </div>
              </div>
              {articleDetailsData?.blocks.map(renderBlock)}
         </>

    );
  }

  return (
       <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                 {content}
            </div>
       </DynamicModuleLoader>
  );
});
