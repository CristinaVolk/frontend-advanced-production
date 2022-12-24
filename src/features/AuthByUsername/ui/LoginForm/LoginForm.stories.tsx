import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LightLoginForm = Template.bind({});
LightLoginForm.args = {
};
LightLoginForm.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
  },
})];

export const DarkLoginForm = Template.bind({});
DarkLoginForm.args = {
};
DarkLoginForm.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const DarkLoginWithError = Template.bind({});
DarkLoginWithError.args = {
};
DarkLoginWithError.decorators = [ThemeDecorator(ThemeEnum.DARK)];
DarkLoginWithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'Wrong username or password',
  },
})];

export const LightLoginFormPending = Template.bind({});
LightLoginFormPending.args = {
};
LightLoginFormPending.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true,
  },
})];
