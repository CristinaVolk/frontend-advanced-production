import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import { Loader } from '@/shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  const { t } = useTranslation();
  return (
       <section className={classNames(classes.PageLoader, {}, [className])}>
            <h1>{t('loading')}</h1>
            <Loader className="lds-grid" />
       </section>
  );
});
