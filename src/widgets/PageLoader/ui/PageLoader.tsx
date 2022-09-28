import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  const { t } = useTranslation();
  return (
       <div className={classNames(classes.PageLoader, {}, [className])}>
            <h1>{t('loading')}</h1>
            <Loader className="lds-grid" />
       </div>
  );
};