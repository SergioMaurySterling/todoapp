import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton () {

    const onClickButton = (msg) => {
        alert(msg);
    }
    
    return (
        <div className='addbutton'>
            <button type="button" className="btn btn-primary"
                onClick={() => onClickButton('Aqui podras abri un modal')}
            >+</button>
        </div>
    );
}

export {CreateTodoButton}