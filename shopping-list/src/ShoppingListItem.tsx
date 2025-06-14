function ShoppingListItem(
  { product, quantity, completed }: {
    product: string;
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
      {product} - {quantity}
    </li>
  );
}

export default ShoppingListItem;
