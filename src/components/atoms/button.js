import React from 'react';

const Button = (props) => {
  return (
  <button className = {props.className} onClick={props.handleClick}>
    {props.value}
  </button>
  )
}

export default Button;