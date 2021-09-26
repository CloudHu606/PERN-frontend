import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './editTodo';
import keys from '../key';

const Listtodo = () => {

    const [todos, setTodos] = useState([]);

    // list all
    const getTodo = async () => {
        try {
            const response = await fetch(`${keys.siteUrl}/api/get`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    // delete 
    const deleteTodo = async id => {
        try {
            const reponse = await fetch(`${keys.siteUrl}/api/delete/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTodo();
    }, []);

    return (
        <Fragment>
            <h1 className="text-center mt-5">List Todo List</h1>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Fragment>
    )

}

export default (Listtodo);