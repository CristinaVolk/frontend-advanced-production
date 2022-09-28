import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
       <div className={classNames(classes.NotFoundPage, {}, [className])}>
            <h1>
                 {t('not-found-page')}
            </h1>
       </div>
  );
};