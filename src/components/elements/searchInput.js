import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

const SearchInput = (props) => {
  return (
    <div className = 'textInput'>
      <Input name="searchTodo" value = {props.searchInputValue} handleChange = {props.handleSearchInputChange}/>
      <Button className = 'button-input' value='search' handleClick = {props.handleSearch}/>
    </div>
  )
}

export default SearchInput;