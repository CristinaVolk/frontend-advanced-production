module.exports = (componentName) => `import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
  title: '/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



  
`;
