import React from 'react'
import './TodoItem.css'

function TodoItem (props) {

    return (
        <div className='container'>
            <ol className="list-group list-group-numbered">
                <ol className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                            onChange={props.onComplete}
                        />
                    </div>
                    <div className="ms-2 me-auto">
                        <div className={props.completed ? "trueClass" : "fw-bold"}>{props.text}</div>
                        <span className="badge bg-primary rounded-pill">{props.status}</span>
                    </div>
                    <button type="button" className="btn btn-danger"
                        onClick={props.onDelete}
                    >Borrar</button>
                </ol>
            </ol>
        </div>
    );
}

export {TodoItem}