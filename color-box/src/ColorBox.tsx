import ColorBoxItem from "./ColorBoxItem.tsx";

function ColorBox({ colors }: { colors: string[] }) {
  const numItems = 16;
  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push(
      <div className="col-3">
        <ColorBoxItem colors={colors} />
      </div>,
    );
  }

  return (
    <div className="grid w-6 mx-auto">
      {items}
    </div>
  );
}

export default ColorBox;
