import React, { useState } from 'react';

const AddEditForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && category && quantity) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        category,
        quantity: parseInt(quantity, 10),
      };
      addItem(newItem);
      setItemName('');
      setCategory('');
      setQuantity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddEditForm;
    