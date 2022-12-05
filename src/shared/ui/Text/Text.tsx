import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
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

type headerTageType = 'h1' | 'h2' | 'h6';

const mapSizeToHeaderTage: Record<TextSize, headerTageType> = {
  [TextSize.S]: 'h6',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

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

  const HeaderTage = mapSizeToHeaderTage[size];

  return (
       <div className={classNames(
         classes.Text,
         {},
         [className, classes[theme], classes[align], classes[size]],
       )}
       >
            {title && <HeaderTage className={classes.title}>{title}</HeaderTage>}
            {text && <p className={classes.text}>{text}</p>}
       </div>
  );
});
