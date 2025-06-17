import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.tsx";
import TodoForm from "./TodoForm.tsx";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const getTodos = () => {
  const storedTodos = localStorage.getItem("todos");

  if (!storedTodos) return [];
  return JSON.parse(storedTodos);
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(getTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id: string) => {
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
        id: crypto.randomUUID(),
        completed: false,
      }];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
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
    </Box>
  );
}

export default TodoList;
