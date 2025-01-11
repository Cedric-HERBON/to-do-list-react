import Todo from "./Todo.jsx";
import { List } from "@mui/material";


const TodoList = ({todos, toggleCompleted, removeTodo}) => {
    return (
        <List>
            {todos.map((todo) => (
                <Todo key={todo.id}
                    todo={todo}  
                    toggleCompleted={toggleCompleted}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
};

export default TodoList;