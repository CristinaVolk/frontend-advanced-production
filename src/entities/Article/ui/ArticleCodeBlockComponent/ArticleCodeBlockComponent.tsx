import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Code } from '@/shared/ui/redesigned/Code';
import { VStack } from '@/shared/ui/redesigned/Stack';
import type { ArticleCodeBlock } from '../../model/types/Article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <VStack
                max
                justify="center"
                align="center"
                className={classNames('', {}, [className])}
            >
                <Code codingLines={block.code} />
            </VStack>
        );
    },
);
