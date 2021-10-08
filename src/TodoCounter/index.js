import React from 'react'
import './TodoCounter.css';

function TodoCounter ({total,completed}) {
    return (
        <React.Fragment>
            <h1 className='title'>Tasqui</h1>
            <h2 className='subtitle'>{`Has completado ${completed} de ${total} Todos`}</h2>
        </React.Fragment>
    )
}

export {TodoCounter};