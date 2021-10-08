//import './App.css';
import React from 'react'
import { AppUI } from './AppUI';

/* const defaultTodos = [
  {text: 'Cortar cebolla', completed:false, status: 'Sin completar'},
  {text: 'Tomar curso de intro a React', completed:false, status: 'Sin completar'},
  {text: 'Estudiar', completed:true, status: 'Completada'},
  {text: 'Leer libro Dan Brown', completed:false, status: 'Sin completar'}
] */

function useLocalStorage (itenName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() =>{
    setTimeout(()=> {
      const localStorageItem = localStorage.getItem(itenName)
      let parsedItem;
    
      if (!localStorageItem){
        localStorage.setItem(itenName, JSON.stringify(initialValue))
        parsedItem = []
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
    },1000)
  });

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itenName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ];

} 


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex]={
      text: todos[todoIndex].text,
      completed: true,
    };
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  }

/*   console.log('render antes del use effect')

  React.useEffect(()=>{
    console.log('use effect');
  }, [totalTodos]);

  console.log('render luego del use effect') */

  return (
    <AppUI 
      totalTodos ={totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
