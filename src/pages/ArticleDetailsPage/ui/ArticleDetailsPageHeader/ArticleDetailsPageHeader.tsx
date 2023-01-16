import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditHook } from '../../model/selectors/article/article';
import classes from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { getArticleDetailsHook } from '@/entities/Article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const navigate = useNavigate();
        const { t } = useTranslation('article');
        const canEdit = getCanEditHook();
        const articleData = getArticleDetailsHook();

        const onBackToArticleList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (articleData && articleData.id) {
                navigate(getRouteArticleEdit(articleData.id));
            }
        }, [articleData, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames(classes.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button
                    onClick={onBackToArticleList}
                    theme={ButtonTheme.CREATIVE}
                >
                    {t('back-to-list')}
                </Button>
                {canEdit && (
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
    },
);
