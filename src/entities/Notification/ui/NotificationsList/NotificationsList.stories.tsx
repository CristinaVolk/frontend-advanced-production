import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationsList',
  component: NotificationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  className: '',
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Произошло какое-то событие',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Произошло какое-то событие',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Произошло какое-то событие',
        },
        {
          id: '4',
          title: 'Уведомление 4',
          description: 'Произошло какое-то событие',
        },
      ],
    },
  ],
};
