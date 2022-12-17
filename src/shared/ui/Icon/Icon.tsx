import React from 'react';
import { classNames } from '@/shared/lib/classNames';

import classes from './Icon.module.scss';

interface IconProps {
  className?: string;
  inverted?: boolean;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, inverted } = props;
  return (
       <Svg className={classNames(inverted ? classes.inverted : classes.Icon, { }, [className])} />
  );
};
