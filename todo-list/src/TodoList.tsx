import List from "@mui/material/List";

import { useState } from "react";
import TodoItem from "./TodoItem.tsx";

const initialTodos = [
  { id: 1, text: "Clean the kitchen", completed: true },
  { id: 2, text: "Make dinner", completed: false },
  { id: 3, text: "Workout", completed: false },
  { id: 4, text: "Walk the dogs", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id: number) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((t) => t.id !== id);
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} remove={removeTodo} />
      ))}
    </List>
  );
}

export default TodoList;
