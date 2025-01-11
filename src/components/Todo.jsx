import { CheckBox, Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const Todo = ({todo, toggleCompleted, removeTodo}) => {

    const handleCheckboxClick = (e) => {
        toggleCompleted(todo.id);
    };
    const handleRemoveClick = (e) => {
        removeTodo(todo.id);
    };

    return (
        <ListItem style={{display: "flex", justifyContent: "center", gap: "1rem"}}>
            <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{ fontFamily: "Cabinet Grotesk",
                textDecoration: todo.completed ? "line-through" : null, fontSize: "1.1rem", color: todo.completed ? "#8c8c8c" : "black"
                }}
            >
                {todo.task}</Typography>
            <IconButton onClick={handleRemoveClick}><Close /></IconButton>
        </ListItem>
    );
};

export default Todo;