import "./App.css";
import ScoreKeeper from "./ScoreKeeper.tsx";

function App() {
  return (
    <div>
      <ScoreKeeper numPlayers={3} target={10} />
    </div>
  );
}

export default App;
