import { CheckBox, Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import React from "react";

const Todo = ({todo, toggleCompleted, removeTodo}) => {

    const handleCheckboxClick = (e) => {
        toggleCompleted(todo.id);
    };
    const handleRemoveClick = (e) => {
        removeTodo(todo.id);
    };

    return (
        <ListItem style={{display: "flex"}}>
            <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{
                textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}</Typography>
            <IconButton onClick={handleRemoveClick}><Close /></IconButton>
        </ListItem>
    );
};

export default Todo;