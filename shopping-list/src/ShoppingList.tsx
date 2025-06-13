import ShoppingListItem from "./ShoppingListItem.tsx";

interface ItemProp {
  id: number;
  item: string;
  quantity: number;
  completed: boolean;
}

function ShoppingList({ items }: { items: ItemProp[] }) {
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
