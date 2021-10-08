import React from 'react'
import './TodoList.css'

function TodoList (props) {
    return (
        <div className='listblock'>
            <ul className='items'>
                {props.children}
            </ul>
        </div>
    );
}

export {TodoList}