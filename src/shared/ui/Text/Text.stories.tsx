import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextFull = Template.bind({});
TextFull.args = {
  title: 'Main',
  text: 'main page',
};

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  title: 'Main',
};
onlyTextDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  text: 'main page',
};
onlyTitleDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const TextFullLight = Template.bind({});
TextFullLight.args = {
  title: 'Main',
  text: 'main page',
};

export const onlyTextLight = Template.bind({});
onlyTextLight.args = {
  title: 'Main',
};

export const onlyTitleLight = Template.bind({});
onlyTitleLight.args = {
  text: 'main page',
};

export const FullTitleError = Template.bind({});
FullTitleError.args = {
  text: 'ERROR',
  theme: TextTheme.ERROR,
};

export const FullTitleErrorDark = Template.bind({});
FullTitleErrorDark.args = {
  text: 'ERROR',
  theme: TextTheme.ERROR,
};
FullTitleErrorDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const FullTextSizeL = Template.bind({});
FullTextSizeL.args = {
  title: 'React',
  text: 'React is awesome',
  size: TextSize.L,
};

export const FullTextSizeM = Template.bind({});
FullTextSizeM.args = {
  title: 'React',
  text: 'React is awesome',
  size: TextSize.M,
};
