import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';

import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = memo(() => {
  const { id } = useParams<{id:string}>();

  return (

       <Page>
            <VStack gap="32">
                 <EditableProfileCard id={id} />
            </VStack>
       </Page>

  );
});

export default ProfilePage;
