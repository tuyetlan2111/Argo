import React from 'react';
import PropTypes from 'prop-types';
import './cardList.css'
import { CardItem } from '../CardItem';

export const CardList = ({ cards , listView}) => (
  <div className="list-card">
    {
      cards.map((card, index)=>(
        <CardItem card={card} key={index}/>
      ))
    }
  </div>
);


CardList.propTypes = {
  cards: PropTypes.array,
  listView: PropTypes.bool

};

CardList.defaultProps = {
  listView: false
};
