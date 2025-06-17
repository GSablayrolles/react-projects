import List from "@mui/material/List";

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.tsx";
import TodoForm from "./TodoForm.tsx";

const getTodos = () => {
  const storedTodos = localStorage.getItem("todos");

  if (!storedTodos) return [];
  return JSON.parse(storedTodos);
};

function TodoList() {
  const [todos, setTodos] = useState(getTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id: number) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text: string) => {
    setTodos((prevTodo) => {
      return [...prevTodo, {
        text: text,
        id: prevTodo.length + 1,
        completed: false,
      }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={removeTodo}
          toggle={toggleTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}

export default TodoList;
