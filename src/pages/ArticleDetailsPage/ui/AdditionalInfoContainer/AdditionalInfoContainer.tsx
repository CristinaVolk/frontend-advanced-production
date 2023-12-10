import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
import classes from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = ({
    className,
}: AdditionalInfoContainerProps) => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article && article.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card className={classes.card} cardPaddings="24" border="round">
            <ArticleAdditionalInfo
                className={className}
                views={article.views}
                createdAt={article.createdAt}
                author={article.user}
                onEdit={onEditArticle}
            />
        </Card>
    );
};
