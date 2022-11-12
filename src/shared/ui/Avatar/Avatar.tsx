import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Avatar.module.scss';

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
    width: size,
    height: size,
  }), [size]);

  return (
       <img
          style={styles}
          className={classNames(classes.Avatar, {}, [className])}
          src={src}
          alt={alt}
       />
  );
};
