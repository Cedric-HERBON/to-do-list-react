import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Button, TextField } from "@mui/material";
const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInpuChange = (e) => {
        setTodo({ ...todo, task: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            //reset task input
            setTodo({...todo, task: ""});
        };
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInpuChange}
            />
            <Button type="submit" >Submit</Button>
        </form>
    );
};

export default TodoForm;