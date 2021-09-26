import React, { Fragment, useEffect, useState } from 'react';
import keys from '../key';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const saveTodo = async e => {
        e.preventDefault();

        try {
            const body = { description };
            console.log(body);
            const response = await fetch(`${keys.siteUrl}/api/update/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.todo_id}`} >
                Edit
            </button>

            <div className="modal fade" id={`id${todo.todo_id}`} onClick={e => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPanelLabel">Edit data</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={e => setDescription(todo.description)} ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={e => setDescription(todo.description)}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={e => saveTodo(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}

export default (EditTodo);