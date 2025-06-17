import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList.tsx";
import Navbar from "./Navbar.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
