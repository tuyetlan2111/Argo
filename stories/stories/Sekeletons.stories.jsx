import React from 'react';
import { Sekeletons } from '../component/Sekeletons';

export default {
  title: 'Sekeletons',
  component: Sekeletons,
  args: {
    bgColor: '#ebebeb',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    circle: false
  },
  argTypes: {
    bgColor: {
      control: 'color',
    },
    circle: {
      name: 'Circle',
      options: [true, false],
      control: { type: 'select' },
    }
  },
};

export const Template = (args) => (<Sekeletons {...args} />);
