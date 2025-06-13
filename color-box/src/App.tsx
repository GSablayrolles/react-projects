import "./App.css";
import ColorBox from "./ColorBox.tsx";

function App() {
  const colors: string[] = [
    "#c7522a",
    "#e5c185",
    "#f0daa5",
    "#fbf2c4",
    "#b8cdab",
    "#74a892",
    "#008585",
    "#004343",
  ];

  return (
    <>
      <ColorBox colors={colors} />
    </>
  );
}

export default App;
