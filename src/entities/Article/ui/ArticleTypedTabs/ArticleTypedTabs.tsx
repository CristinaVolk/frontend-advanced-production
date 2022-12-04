import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { ArticleType } from '../../model/types/Article';
import classes from './ArticleTypedTabs.module.scss';

interface ArticleTypedTabsProps {
  className?: string;
  type: string;
  onChangeType: (value: TabItem<ArticleType>) => void;
}

export const ArticleTypedTabs = memo((props: ArticleTypedTabsProps) => {
  const { className, onChangeType, type } = props;
  const { t } = useTranslation('article');

  const typedTabs = useMemo<TabItem<ArticleType>[]>(() => [
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

  ], [t]);

  const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
	  onChangeType(tab);
  }, [onChangeType]);

  return (
       <div className={classNames(classes.ArticleTypedTabs, {}, [className])}>
            <Tabs<ArticleType>
               className={classes.tabs}
               tabs={typedTabs}
               value={type}
               onTabClick={onTabClick}
            />
       </div>
  );
});
