import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppRoutes, RoutePaths } from '@/shared/config/routes/routes';
import { classNames } from '@/shared/lib/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article/article';
import classes from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation('article');
  const canEdit = useSelector(getCanEditArticle);
  const articleData = useSelector(getArticleDetailsData);

  const onBackToArticleList = useCallback(() => {
    navigate(RoutePaths.articles_details);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePaths[AppRoutes.ARTICLES_DETAILS]}${articleData?.id}/edit`);
  }, [articleData?.id, navigate]);

  return (
       <HStack
          max
          justify="between"
          className={
         classNames(classes.ArticleDetailsPageHeader, {}, [className])
       }
       >
            <Button
               onClick={onBackToArticleList}
               theme={ButtonTheme.CREATIVE}
            >
                 {t('back-to-list')}
            </Button>
            {canEdit
           && (
           <Button
              className={classes.editBtn}
              theme={ButtonTheme.CREATIVE}
              onClick={onEditArticle}
           >
                {t('edit-article')}
           </Button>
           )}
       </HStack>
  );
});
