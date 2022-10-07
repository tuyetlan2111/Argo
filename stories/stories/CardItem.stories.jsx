import React from 'react';
import { CardItem } from '../component/CardItem';

const data =
  {
    id: 1,
    category: 'SUV',
    title: '2022 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: 23805,
    btnText: 'See Details',
    description: 'aaaa'
  }

export default {
  title: 'Example/CardItem',
  component: CardItem,
  args: {
    card: data
  },
  argTypes: {
    card:{
      name: 'Data'
    }
  }
};

export const Template = (args) => (<CardItem {...args} />);


