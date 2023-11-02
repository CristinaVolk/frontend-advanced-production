import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

import classes from './ArticleTypedTabs.module.scss';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames';

interface ArticleTypedTabsProps {
    className?: string;
    type: string;
    onChangeType: (value: TabItem<ArticleType>) => void;
}

export const ArticleTypedTabs = memo((props: ArticleTypedTabsProps) => {
    const { className, onChangeType, type } = props;
    const { t } = useTranslation('article');

    const typedTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Science'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Economics'),
            },
            {
                value: ArticleType.ALL,
                content: t('all articles'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem<ArticleType>) => {
            onChangeType(tab);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs<ArticleType>
                    className={classNames('', {}, [className])}
                    tabs={typedTabs}
                    direction="column"
                    value={type}
                    onTabClick={onTabClick}
                />
            }
            off={
                <TabsDeprecated<ArticleType>
                    className={classes.tabs}
                    tabs={typedTabs}
                    value={type}
                    onTabClick={onTabClick}
                />
            }
        />
    );
});
