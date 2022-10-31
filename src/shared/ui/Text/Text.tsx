import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
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
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
       <div className={classNames(
         classes.Text,
         {},
         [className, classes[theme], classes[align]],
       )}
       >
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
       </div>
  );
});
