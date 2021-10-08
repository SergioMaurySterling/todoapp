import React from 'react'
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
}){
    return (
        <React.Fragment>
        <TodoCounter
            total ={totalTodos}
            completed = {completedTodos}
        />

        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
    
        <TodoList>
            {error && <p>Error...</p>}
            {loading && <p>Estamos cargando...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}

            {searchedTodos.map(todo=>(
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                status={todo.status}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={()=> deleteTodo(todo.text)}
            />
            ))}
        </TodoList>  

        <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI}