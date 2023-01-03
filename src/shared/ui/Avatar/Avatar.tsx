import React, { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import { Icon } from '../Icon/Icon';
import UserIcon from '../../assets/icons/user-icon.svg';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
	className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className, src, alt, size,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;
  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
       <AppImage
          errorFallback={errorFallback}
          fallback={fallback}
          style={styles}
          className={classNames(classes.Avatar, {}, [className])}
          src={src}
          alt={alt}
       />
  );
};
