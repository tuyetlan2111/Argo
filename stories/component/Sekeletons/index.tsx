import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export const Sekeletons = ({ bgColor, width, height, borderRadius, circle}) => (
  <div className='loading'>
    <Skeleton baseColor={bgColor} width={width} height={height} borderRadius={borderRadius} circle={circle}/>
  </div>
)


Sekeletons.propTypes = {
  bgColor: PropTypes.string,
  // height: PropTypes.string,
  // width: PropTypes.string,
  circle: PropTypes.bool
}

Sekeletons.defaultProps = {
  bgColor: '#ebebeb',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  circle: false
}