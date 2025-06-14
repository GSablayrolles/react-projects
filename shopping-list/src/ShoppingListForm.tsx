import { useState } from "react";

function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    addItem(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        name="product"
        id="product"
        placeholder="porduct name"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default ShoppingListForm;
