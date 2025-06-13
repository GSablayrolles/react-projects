function ShoppingListItem({ item, quantity, completed }) {
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
