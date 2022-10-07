import React from "react";
import PropTypes from 'prop-types';
import './accordion.css'
import { useState } from "react";



export const Accordion = ({ listData }) => {

  const [show, setShow] = useState(false)

  var acc = document.getElementsByClassName("title");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      console.log(this);
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return (
    <div className="accordion-list">
      {
        listData.map((list, index) => (
          <div key={index} className='item'>
            <div className="title">
              <button className="accordion">{list.title}</button>
              <div className="sign">+</div>
            </div>
            <div className="panel">
              <p>{list.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

Accordion.prototype = {

}

Accordion.defaultProps = {

}
