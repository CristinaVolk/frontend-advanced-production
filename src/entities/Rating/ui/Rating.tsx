import React, { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { RatingRedesigned } from './RatingRedesigned';
import { RatingDeprecated } from './RatingDeprecated';

export interface RatingProps {
    rate?: number;
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const Rating = memo((props: RatingProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<RatingRedesigned {...props} />}
        off={<RatingDeprecated {...props} />}
    />
));
