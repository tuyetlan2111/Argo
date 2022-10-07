import React from 'react';
import { Input } from '../component/Input';

export default {
  title: 'Example/Input',
  component: Input,
  args:{
    placeholder: 'Please input value here',
    paddingLeft: '16',
    bgColor: '#cccccc',
  },
};

export const Template = (args) => (<Input {...args} />);
