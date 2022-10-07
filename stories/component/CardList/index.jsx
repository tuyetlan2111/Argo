import React from 'react';
import PropTypes from 'prop-types';
import './cardList.css'
import { CardItem } from '../CardItem';

export const CardList = ({ cards }) => (
  <div className="list-card">
    {
      cards.map((card, index)=>(
        <CardItem card={card} key={index}/>
      ))
    }
  </div>
);


CardList.propTypes = {
  cards: PropTypes.array

};

CardList.defaultProps = {

};
