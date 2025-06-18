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
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    Animals: Palette["primary"];
    House: Palette["primary"];
    Car: Palette["primary"];
  }

  interface PaletteOptions {
    Animals?: PaletteOptions["primary"];
    House?: PaletteOptions["primary"];
    Car?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    Animals: true;
    House: true;
    Car: true;
  }
}

const referenceLabels = [
  { label: "Animals", color: "#737aff" },
  { label: "House", color: "#72b043" },
  { label: "Car", color: "#ed76ed" },
];

const theme = createTheme({
  palette: {
    Animals: {
      main: referenceLabels[0].color,
    },
    House: {
      main: referenceLabels[1].color,
    },
    Car: {
      main: referenceLabels[2].color,
    },
  },
});

interface Todo {
  todo: { id: string; text: string; completed: boolean; label: string };
  remove: (id: string) => void;
  toggle: (id: string) => void;
  edit: (id: string, text: string, label: string) => void;
}

export default function TodoItem(
  { todo, remove, toggle, edit }: Todo,
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
    <ThemeProvider theme={theme}>
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
              value={referenceLabels.find((label) =>
                label.label === editLabel
              ) ||
                null}
              onChange={handleLabelChange}
              options={referenceLabels}
              getOptionLabel={(option) => option.label}
              renderValue={(value, getItemProps) => (
                <Chip
                  label={value.label}
                  {...getItemProps()}
                  color={value.label}
                  variant="outlined"
                  size="small"
                  // sx={{ color: value.color, borderColor: value.color }}
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
    </ThemeProvider>
  );
}
