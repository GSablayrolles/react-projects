import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

interface Todo {
  todo: { id: string; text: string; completed: boolean };
  remove: (id: string) => void;
  toggle: (id: string) => void;
  edit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, remove, toggle, edit }: Todo) {
  const [editText, setEditText] = useState(todo.text);

  //   const labelId = `checkbox-list-label-${todo.id}`;

  const removeTodo = () => {
    remove(todo.id);
  };

  const toggleTodo = () => {
    toggle(todo.id);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const editTodo = (e) => {
    e.preventDefault();

    edit(todo.id, editText);
  };

  const styles = {
    color: todo.completed ? "grey" : "",
    textDecoration: todo.completed ? "line-through" : "",
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="clear" onClick={removeTodo}>
          <ClearIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onClick={toggleTodo}
          />
        </ListItemIcon>
        {
          /* <ListItemText
          id={labelId}
          primary={todo.text}
        /> */
        }
        <form onSubmit={editTodo}>
          <TextField
            id="edit-todo"
            variant="standard"
            onChange={handleChange}
            value={editText}
            sx={styles}
            disabled={todo.completed}
          />
        </form>
      </ListItemButton>
    </ListItem>
  );
}
