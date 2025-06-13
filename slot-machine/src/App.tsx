import "./App.css";
import Slots from "./Slots.tsx";

function App() {
  return (
    <div>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍒" val3="🍑" />
    </div>
  );
}

export default App;
