import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";

interface Todo {
  todo: { id: string; text: string; completed: boolean; label: string };
  remove: (id: string) => void;
  toggle: (id: string) => void;
  edit: (id: string, text: string, label: string) => void;
  referenceLabels: { label: string; color: string }[];
}

export default function TodoItem(
  { todo, remove, toggle, edit, referenceLabels }: Todo,
) {
  const [editText, setEditText] = useState(todo.text);
  const [editLabel, setEditLabel] = useState(todo.label);

  useEffect(() => {
    edit(todo.id, editText, editLabel);
  }, [editLabel]);

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

  const handleLabelChange = (e) => {
    setEditLabel(e.target.innerText || "");
  };

  const editTodo = (e) => {
    e.preventDefault();

    console.log(editLabel);

    edit(todo.id, editText, editLabel);
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

        <FormControl fullWidth>
          <Autocomplete
            value={referenceLabels.find((label) => label.label === editLabel) ||
              null}
            onChange={handleLabelChange}
            options={referenceLabels}
            getOptionLabel={(option) => option.label}
            renderValue={(value, getItemProps) => (
              <Chip
                label={value.label}
                {...getItemProps()}
                color="warning"
                variant="outlined"
                size="small"
              />
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Reference"
                variant="standard"
              />
            )}
          />
        </FormControl>
      </ListItemButton>
    </ListItem>
  );
}
