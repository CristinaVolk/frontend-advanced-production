import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

// Test Component
export const BugButton = () => {
  const { t } = useTranslation('error');
  const [error, setError] = useState<boolean>(false);

  const onThrow = () => {
	  setError(true);
  };

  useEffect(() => {
	  if (error) {
		  throw new Error();
	  }
  }, [error]);

  return (

       <Button
          theme={ThemeButton.CREATIVE}
          onClick={onThrow}
       >
            {t('throw')}
       </Button>

  );
};
