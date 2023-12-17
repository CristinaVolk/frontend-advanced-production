import { useSelector } from 'react-redux';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { getArticleDetailsData } from '../../../model/selectors/getArticleDetails/getArticleDetails';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { renderBlock } from '../renderBlock';
import classes from '../ArticleDetails.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleDetailsLoadingRedesigned = () => (
    <VStack gap="16" max>
        <VStack max align="center">
            <Skeleton width={200} height={200} border="50%" />
        </VStack>
        <Skeleton width={200} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
    </VStack>
);

export const ArticleDetailsRedesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={article?.img}
                className={classes.articleImg}
            />
            {article?.blocks.map(renderBlock)}
        </>
    );
};
