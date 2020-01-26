import React, {useState} from 'react';
import './App.css';
import Pane from './components/elements/pane';
import TextInput from './components/elements/textInput';
import SearchInput from './components/elements/searchInput'
import Button from './components/atoms/button';

const App = () => {
  const [ textInputValue, setTextInputValue] = useState('');
  const [ todoList, setTodoList ] = useState([]);
  const [ searchInputValue, setSearchInputValue ] = useState('');
  const [ searchList, setSearchList ] = useState([]);
  const [ isSearching, setIsSearching ] = useState(false);

  const handleTextInputChange = (e) => {
    const { value } = e.target;
    setTextInputValue(value)
  }

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchInputValue(value.trim());
  }

  const handleCreateTodo = () => {
    const todoItem = {};
    todoItem.isCompleted = false;
    todoItem.todo = textInputValue;
    setTodoList([...todoList, todoItem]);
    setTextInputValue('');
    setIsSearching(false);
  }

  const handleSearch = () => {
    const regex = new RegExp(searchInputValue, 'i');
    const searchResult = todoList.filter(item => regex.test(item.todo) && item.isCompleted);
    console.log(searchResult);
    setSearchList(searchResult);
    setIsSearching(true);
    setSearchInputValue('');
  }
  
  const handleStatusChange = (index) => {
    const list = todoList;
    const modifiedList = list.map((item, itemIndex ) => {
      if(itemIndex === index) {
        item.isCompleted = !item.isCompleted;
        return item;
      }
      return item
    });
    
    setTodoList(modifiedList);
  }

  const handleDelete = (index) => {
    const list = todoList;
    const modifiedList =list.filter((item, itemIndex) => itemIndex !== index);
    const modifiedSearchList = searchList.filter((item, itemIndex) => itemIndex !== index)
    setTodoList(modifiedList);
    setSearchList(modifiedSearchList);
  }
  const switchPage = () => {
    const modifiedSearchList = searchList.filter((item) => !item.isCompleted);
    setSearchList(modifiedSearchList);
    setIsSearching(prevState => !prevState);
  }
  const todoListBasedOnSearchingStatus = isSearching? searchList : todoList;
  const emptyList = isSearching? <p>No search result</p> : <p>No pending todo</p>;
  const TodoList = todoListBasedOnSearchingStatus.length === 0 ?  emptyList : todoListBasedOnSearchingStatus.map((item, index)=> <Pane 
  key = {index} 
  todoItem = {item} 
  handleDelete = {() => handleDelete(index)}
  handleStatusChange = {() => handleStatusChange(index)}
  isSearching = {isSearching}
  /> );
  
  return (
  <main className="main-container">
    <SearchInput 
    searchInputValue = {searchInputValue}
    handleSearchInputChange = {handleSearchInputChange}
    handleSearch = {searchInputValue === ""? null: handleSearch}
    />
    <TextInput 
    value= {textInputValue} 
    handleTextInputChange = {handleTextInputChange} 
    handleCreateTodo ={textInputValue ===  ""? null: handleCreateTodo}
    />
    <Button 
    className="button-input" 
    value = {isSearching? 'Go to Todo List' : 'Go to Search List'} 
    handleClick = {switchPage} 
    />
    <section className='sub-container'>
      {TodoList}
    </section>
  </main>
  )
}

export default App;
