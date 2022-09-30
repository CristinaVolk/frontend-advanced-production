import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation('error');
  const onRefresh = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
       <div className={classNames(classes.PageError, {}, [className])}>
            <Button
               onClick={onRefresh}
               theme={ThemeButton.CREATIVE}
            >
                 {t('refresh')}
            </Button>
       </div>
  );
};
