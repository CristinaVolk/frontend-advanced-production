import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';

const SettingsPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page data-testid="SettingPage">
            <VStack gap="16">
                <Text title={t('Settings Page')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
