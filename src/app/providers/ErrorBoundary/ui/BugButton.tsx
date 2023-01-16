import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button';

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
        <Button theme={ButtonTheme.NEAT} onClick={onThrow}>
            {t('throw')}
        </Button>
    );
};
