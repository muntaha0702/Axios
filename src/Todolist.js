import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Todolist = () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function fetchTodos() {

            try {
                const response = await axios.get(URL);
                setTodos(response.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchTodos();
    }, []);
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};
export default Todolist;