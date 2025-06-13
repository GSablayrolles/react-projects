function ShoppingListItem(
  { item, quantity, completed }: {
    item: string;
    quantity: number;
    completed: boolean;
  },
) {
  const styles = {
    color: completed ? "grey" : "",
    textDecoration: completed ? "line-through" : "",
  };

  return (
    <li
      style={styles}
    >
      {item} - {quantity}
    </li>
  );
}

export default ShoppingListItem;
