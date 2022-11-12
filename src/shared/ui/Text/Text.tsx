import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TextProps {
	className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  return (
       <div className={classNames(
         classes.Text,
         {},
         [className, classes[theme], classes[align], classes[size]],
       )}
       >
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
       </div>
  );
});
