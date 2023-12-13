import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../../../model/selectors/getArticleDetails/getArticleDetails';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import classes from '../ArticleDetails.module.scss';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { renderBlock } from '../renderBlock';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export const ArticleDetailsLoadingDeprecated = () => (
    <VStack gap="16">
        <VStack max align="center">
            <Skeleton width={200} height={200} border="50%" />
        </VStack>
        <Skeleton width={200} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
    </VStack>
);

export const ArticleDetailsDeprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <HStack justify="center" max className={classes.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={classes.avatar}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <Text
                    className={classes.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" className={classes.articleInfo}>
                    <Icon className={classes.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={classes.articleInfo}>
                    <Icon className={classes.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderBlock)}
        </>
    );
};
