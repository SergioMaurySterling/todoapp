import React from 'react'
import './TodoSearch.css'
import '../App/index.js'

function TodoSearch ({searchValue,setSearchValue}){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className='container'>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Busca tu tarea" 
                    aria-label="todosearch" aria-describedby="addon-wrapping"
                    value={searchValue}
                    onChange={onSearchValueChange}    
                />
            </div>
        </div>
    );
}

export {TodoSearch}