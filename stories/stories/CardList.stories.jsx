import React from 'react';
import { CardList } from '../component/CardList';

const data = [
  {
    id: 1,
    category: 'SUV',
    title: '2022 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: ''
  },
  {
    id: 2,
    category: 'SUV',
    title: '2022 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: ''
  },
  {
    id: 3,
    category: 'aaaaaaa',
    title: '2022 Kia Suv',
    imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
    price: '23805',
    btnText: 'See Details',
    description: ''
  }
]
export default {
  title: 'Example/CardList',
  component: CardList,
  args: {
    cards: data
  },
  argTypes: {

  },
};

export const Template = (args) => (<CardList {...args} />);
