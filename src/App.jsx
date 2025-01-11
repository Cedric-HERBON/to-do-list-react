import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import { Typography } from '@mui/material';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className='App' style={{display: "flex", flexDirection: "column"}}>
          <Typography style={{ fontFamily: "Aboreto", fontWeight: "400", padding:12, marginBottom: "1.2rem"}} variant='h2' align='center' >To-do List</Typography>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos} 
            toggleCompleted={toggleCompleted} 
            removeTodo={removeTodo}
          />
      </div>
    </>
  )
};

export default App;
