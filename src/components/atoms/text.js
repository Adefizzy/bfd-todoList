import React from 'react';

const Text = (props) => 
  <p className = {`todoText ${props.isCompleted && 'todoText-completed'}`}>{props.todoText}</p>;
 

export default Text;