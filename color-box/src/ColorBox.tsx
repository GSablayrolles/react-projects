import ColorBoxItem from "./ColorBoxItem.tsx";

function ColorBox({ colors }: { colors: string[] }) {
  const numItems = 16;
  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push(i);
  }

  return (
    <div className="grid">
      {items.map((i) => (
        <div key={i} className="col-3">
          <ColorBoxItem colors={colors} />
        </div>
      ))}
    </div>
  );
}

export default ColorBox;
