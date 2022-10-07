import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, paddingLeft, bgColor }) => (
  <div>
    <input type='text' placeholder={placeholder} style={{paddingLeft: paddingLeft + 'px',  background: bgColor}}/>
  </div>
);


Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  paddingLeft: PropTypes.string,
  bgColor: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Please input value here',
  paddingLeft: '0',
  bgColor: '#cccccc',
};
