import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './StarRating.module.scss';
import starIcon from '../../../assets/icons/star-icon.svg';
import { Icon as IconDEprecated } from '../Icon/Icon';
import { Icon as IconRedesigned } from '../../redesigned/Icon';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface StarRatingProps {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelect?: (starNumber: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;

    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onStarClick = (starNumber: number) => () => {
        if (!isSelected) {
            onSelect?.(starNumber);
            setIsSelected(true);
            setCurrentStarsCount(starNumber);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => classes.StarRatingDeprecated,
                    on: () => classes.StarRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                    className: classNames(
                        classes.StarIcon,
                        {
                            [classes.selected]: isSelected,
                            [classes.hovered]: currentStarsCount >= starNumber,
                        },
                        [className],
                    ),
                    key: starNumber,
                    Svg: starIcon,
                    width: size,
                    height: size,
                    onMouseEnter: onHover(starNumber),
                    onMouseLeave: onLeave,
                    onClick: onStarClick(starNumber),
                };

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <IconRedesigned
                                clickable={!isSelected}
                                {...commonProps}
                            />
                        }
                        off={<IconDEprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
