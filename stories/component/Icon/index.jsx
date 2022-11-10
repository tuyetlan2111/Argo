import React from "react";
import PropTypes from 'prop-types';
import { Add } from '@carbon/icons-react';
import { ArrowDown } from '@carbon/icons-react';


export const Icon = ({ type, size }) => {
  // type = Add || ArrowDown
  return (
    <div>
      <button>
        {
          type == 'ArrowDown' && (<ArrowDown
            width={size !== "small" ? "24" : "16"}
            height={size !== "small" ? "24" : "16"} />)
        }
        {
          type == 'Add' && (<Add
            width={size !== "small" ? "24" : "16"}
            height={size !== "small" ? "24" : "16"} />)
        }
      </button>
    </div>
  )
}

Icon.prototype = {
  // small: PropTypes.string,
  type: PropTypes.string,
  // backgroundColor: PropTypes.string,
}

Icon.defaultProps = {
  // small: 'small',
  type: 'Add',
  // backgroundColor
}
