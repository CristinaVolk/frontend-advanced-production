import { Story } from '@storybook/react';
import { ThemeEnum } from '@/shared/const/theme';
// eslint-disable-next-line kvolk-plugin/layer-import
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => (
     <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`}>
               <StoryComponent />
          </div>
     </ThemeProvider>
);
