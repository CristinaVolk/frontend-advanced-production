import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (story: ()=> Story) => (
     <StoreProvider isForStorybook>
          {story()}
     </StoreProvider>
);
