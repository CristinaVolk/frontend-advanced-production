import { Story } from '@storybook/react';
import { ThemeEnum } from '@/shared/const/theme';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => (
     <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`}>
               <StoryComponent />
          </div>
     </ThemeProvider>
);
