import React from 'react'
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal/Index'

function AppUI () {
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {(value) =>{
                    return (
                        <TodoList>
                            {value.error && <p style={{color:'white', marginLeft:'50px'}}>Error...</p>}
                            {value.loading && <p style={{color:'white', marginLeft:'50px'}}>Estamos cargando...</p>}
                            {(!value.loading && !value.searchedTodos.length) && <p style={{color:'white', marginLeft:'50px'}}>Crea tu primer Todo</p>}

                            {value.searchedTodos.map(todo=>(
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                status={todo.status}
                                completed={todo.completed}
                                onComplete={() => value.completeTodo(todo.text)}
                                onDelete={()=> value.deleteTodo(todo.text)}
                            />
                            ))}
                        </TodoList>
                    );
                }}
            </TodoContext.Consumer>
            <TodoContext.Consumer>
                {(value) =>{
                    return (
                        <React.Fragment>
                            {value.openModal && (
                                <Modal>
                                    <p>Prueba!</p>
                                </Modal>
                            )}
                        </React.Fragment>
                    );
                }}
            </TodoContext.Consumer>
            <CreateTodoButton
                
            />
        </React.Fragment>
    );
}


export {AppUI}