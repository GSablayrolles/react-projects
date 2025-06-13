import ShoppingListItem from "./ShoppingListItem.tsx";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          {...i}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
