import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticleAdditionalInfo.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { User } from '@/entities/User';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit?: () => void;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, createdAt, views, onEdit } = props;
        const { t } = useTranslation();

        return (
            <VStack
                gap="32"
                className={classNames(classes.ArticleAdditionalInfo, {}, [
                    className,
                ])}
            >
                <HStack gap="8">
                    <Avatar size={32} src={author.avatar} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <Button onClick={onEdit}>{t('Edit')}</Button>
                <Text text={t('{{ count }} views', { count: views })} />
            </VStack>
        );
    },
);
