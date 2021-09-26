import React, { Fragment, useState } from 'react';
import keys from '../key';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    const submitForm = async e => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch(`${keys.siteUrl}/api/create`,
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body)
                });
            window.location = "/";
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt5">Todo List</h1>

            <form className="d-flex mt-5" onSubmit={submitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">ADD</button>

            </form>
        </Fragment>
    )
}

export default (InputTodo);