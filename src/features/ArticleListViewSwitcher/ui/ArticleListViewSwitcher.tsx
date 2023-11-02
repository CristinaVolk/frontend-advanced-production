import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { ListViewsTypes } from '../model/types/ListViewsTypes';
import classes from './ArticleListViewSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const ArticleListViewSwitcher = memo(
    (props: ArticleListViewSwitcherProps) => {
        const { className, view, onViewClick } = props;

        const onIconClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        const content = (
            <Card
                className={classNames(
                    classes.ArticleViewSelectorRedesigned,
                    {},
                    [className],
                )}
                border="round"
            >
                <HStack gap="8">
                    {ListViewsTypes.map((listViewType) => (
                        <Icon
                            key={listViewType.view}
                            className={classNames(
                                '',
                                {
                                    [classes.notSelected]:
                                        view !== listViewType.view,
                                },
                                [],
                            )}
                            width={24}
                            height={24}
                            Svg={listViewType.icon}
                        />
                    ))}
                </HStack>
            </Card>
        );

        const deprecatedContent = (
            <div
                className={classNames(classes.ArticleListViewSwitcher, {}, [
                    className,
                ])}
            >
                {ListViewsTypes.map((listViewType) => (
                    <ButtonDeprecated
                        key={listViewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onIconClick(listViewType.view)}
                        className={classNames(
                            '',
                            {
                                [classes.notSelected]:
                                    view !== listViewType.view,
                            },
                            [],
                        )}
                    >
                        <IconDeprecated
                            width={24}
                            height={24}
                            Svg={listViewType.icon}
                        />
                    </ButtonDeprecated>
                ))}
            </div>
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={content}
                off={deprecatedContent}
            />
        );
    },
);
