import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import { ArticleTextBlock } from '../../model/types/Article';
import classes from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { block, className } = props;

        return (
            <div
                className={classNames(classes.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block?.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned
                                title={block.title}
                                className={classes.title}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={classes.title}
                            />
                        }
                    />
                )}
                {block?.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned
                                key={paragraph}
                                text={paragraph}
                                className={classes.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={classes.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
