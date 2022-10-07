import React from 'react';
import { Icon } from '../component/Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
  args:{
    size: 'small',
    type: 'Add'
  },
  argTypes: {
    size:{
      options: ['small', 'large'],
      control: { type: 'select' },
    },
    type:{
      options: ['Add', 'ArrowDown'],
      control: { type: 'select' },
    }
    
  },
};

export const Template = (args) => (<Icon {...args} />);
