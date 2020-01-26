import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

const TextInput = (props) => {
  return (
    <div className = 'textInput'>
      <Input name="inputTodo" value = {props.value} handleChange = {props.handleTextInputChange} />
      <Button value = 'Add todo' className = 'button-input' handleClick = {props.handleCreateTodo}/>
    </div>
  )
}

export default TextInput;