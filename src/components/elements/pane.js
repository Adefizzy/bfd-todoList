import React from 'react';
import Button from '../atoms/button';
import Checker from '../atoms/checker';
import Text from '../atoms/text';
const Pane = (props) => {
  return (
    <main className = 'pane-container'>
      <header className = 'pane-header'>
        <div>
            <Checker isCompleted = {props.todoItem.isCompleted} />
            <Text todoText = {props.todoItem.todo} isCompleted = {props.todoItem.isCompleted}/>
        </div>
        <div>
          {!props.isSearching && <Button 
          className = {props.todoItem.isCompleted? 'button-remove' : 'button-complete'}
          value = {props.todoItem.isCompleted? 'remove' : 'complete'}
          handleClick = {props.handleStatusChange}
          />}
         <Button className = 'button-delete' value='delete' handleClick = {props.handleDelete}/>
        </div>
      </header>
    </main>
  );
}

export default Pane;