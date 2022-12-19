import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import starIcon from '../../assets/icons/star-icon.svg';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starNumber: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className, size = 30, selectedStars = 0, onSelect,
  } = props;

  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStarsCount] = useState(0);

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
       <div className={classNames(classes.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                 <Icon
                    style={{ height: size }}
                    className={classNames(
                      classes.StarIcon,
                      {
                        [classes.selected]: isSelected,
                        [classes.hovered]: currentStarsCount >= starNumber,
                      },
                      [className],
                    )}
                    key={starNumber}
                    Svg={starIcon}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onStarClick(starNumber)}
                 />
            ))}
       </div>
  );
});
