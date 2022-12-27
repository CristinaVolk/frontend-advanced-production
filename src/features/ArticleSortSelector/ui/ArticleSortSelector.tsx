import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';

import { SortOrder } from '@/shared/types/Order';
import classes from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/shared/const/article';
import { ArticleSortFieldType } from '@/shared/types/article';
import { Select, SelectOption } from '@/shared/ui/Select/Select';

interface ArticleSortSelectorProps {
	className?: string;
	order: SortOrder;
	sort: ArticleSortFieldType;
	onChangeSort: (newSort: ArticleSortFieldType) => void;
	onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, sort, onChangeSort, onChangeOrder, order,
  } = props;
  const { t } = useTranslation('article');
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'desc',
      content: t('descending'),
    },
    {
      value: 'asc',
      content: t('ascending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortFieldType>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('created date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('number of views'),
    },
  ], [t]);

  return (
       <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortFieldType>
               className={classes.selectBox}
               options={sortFieldOptions}
               label={t('sort')}
               readonly={false}
               value={sort}
               onChangeOption={onChangeSort}
            />
            <Select<SortOrder>
               className={classes.selectBox}
               options={orderOptions}
               label={t('by')}
               readonly={false}
               value={order}
               onChangeOption={onChangeOrder}
            />
       </div>
  );
});
