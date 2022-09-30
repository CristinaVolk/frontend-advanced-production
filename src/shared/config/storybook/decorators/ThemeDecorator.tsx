import { Story } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => (
     <div className={`app ${theme}`}>
          <StoryComponent />
     </div>
);
