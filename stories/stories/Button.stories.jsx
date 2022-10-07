import React from 'react';
import { Button } from '../component/Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    primary: true,
    label: 'Button',
    size: 'medium',
    backgroundColor: '#ec9031',
    color: '#fff'
  },
  argTypes: {
    label: {
      name: 'Label Text'
    },

    backgroundColor: {
      control: 'color',
      // table:{
      //   disable: true
      // }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    }
  },
};

export const Template = (args) => (<Button {...args} />);
