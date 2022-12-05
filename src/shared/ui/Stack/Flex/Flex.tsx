import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  end: classes.justifyEnd,
  center: classes.justifyCenter,
  between: classes.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  end: classes.alignEnd,
  center: classes.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  16: classes.gap16,
  32: classes.gap32,
};

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props;

  const flexClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const modes = {
    [classes.max]: max,
  };

  return (
       <div className={classNames(classes.Flex, modes, [...flexClasses])}>
            {children}
       </div>
  );
};
