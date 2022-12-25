import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '@/entities/Article';
import { ListViewsTypes } from '../model/types/ListViewsTypes';
import classes from './ArticleListViewSwitcher.module.scss';

interface ArticleListViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export const ArticleListViewSwitcher = memo((props: ArticleListViewSwitcherProps) => {
  const { className, view, onViewClick } = props;

  const onIconClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
       <div className={classNames(classes.ArticleListViewSwitcher, {}, [className])}>
            {ListViewsTypes.map((listViewType) => (
                 <Button
                    key={listViewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onIconClick(listViewType.view)}
                    className={classNames(
                      '',
                      { [classes.notSelected]: view !== listViewType.view },
                      [],
                    )}
                 >
                      <Icon
                         Svg={listViewType.icon}
                      />
                 </Button>
            ))}
       </div>
  );
});
