// @ts-types="react"
import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm.tsx";
import ShoppingListItem from "./ShoppingListItem.tsx";

function ShoppingList() {
  const [items, setItems] = useState([{
    id: crypto.randomUUID(),
    product: "eggs",
    quantity: 12,
    completed: false,
  }]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, {
        ...item,
        id: crypto.randomUUID(),
        completed: false,
      }];
    });
  };

  return (
    <div className="flex justify-content-center flex-column align-items-center">
      <h1>Shopping List</h1>
      <ShoppingListForm addItem={addItem} />

      <div>
        <ul>
          {items.map((i) => (
            <ShoppingListItem
              key={i.id}
              {...i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
