import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './cardItem.css';

export const CardItem = ({ card }) => (
  <div className='card-item'>
    <div className='category'>
      {card.category}
    </div>
    <h3 className='title'><a href=''>{card.title}</a></h3>
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

};
