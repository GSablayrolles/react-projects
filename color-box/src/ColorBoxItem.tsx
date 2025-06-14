import { useState } from "react";

function ColorBoxItem({ colors }: { colors: string[] }) {
  const [randColor, setRandColor] = useState(
    colors[Math.floor(Math.random() * colors.length)],
  );

  const styles = {
    backgroundColor: randColor,
    width: "5em",
    height: "5em",
    margin: 0,
  };

  return (
    <h1
      style={styles}
      onClick={() =>
        setRandColor(colors[Math.floor(Math.random() * colors.length)])}
    >
    </h1>
  );
}

export default ColorBoxItem;
