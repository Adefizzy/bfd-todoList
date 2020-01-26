import React from 'react';

const Checker = (props) => {
  return (
    <i
    className={`fa fa-${props.isCompleted? 'check' : 'minus'}-circle ${props.isCompleted? 'checker-completed' : 'checker-pending'}`}></i>
  );
}


export default Checker;