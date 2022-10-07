import React from 'react';
import PropTypes from 'prop-types';
import './cardItem.css'
import { Button } from '../Button';

export const CardItem = ({ card }) => (
  <div className='card-item'>
    <div className='category'>
      {card.category}
    </div>
    <div className='title'>
      <h3><a href=''>{card.title}</a></h3>
    </div>
    <div className='image'>
      <img src={card.imageSrc} alt='image' />
    </div>
    <div className='content'>
      <span className='price'>
        ${card.price}
      </span>
      <p className='description'>
        {card.description}
      </p>
    </div>
    <Button label='Button' size='medium' backgroundColor='#ec9031' />
  </div>
);


CardItem.propTypes = {
  card: PropTypes.object
}

CardItem.defaultProps = {
  // card:
  // {
  //   id: 1,
  //   category: 'SUV',
  //   title: '2022 Kia Suv',
  //   imageSrc: 'https://e7.pngegg.com/pngimages/114/496/png-clipart-kia-motors-car-2016-kia-sportage-2018-kia-sportage-kia-compact-car-car.png',
  //   price: 23805,
  //   btnText: 'See Details',
  //   description: 'aaaa'
  // }

};
