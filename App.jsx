
import React, { useState } from 'react';
import InventoryTable from './assets/InventoryTable';
import AddEditForm from './assets/AddEditForm';
import FilterSort from './assets/FilterSort';
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item =>
    filterCategory ? item.category === filterCategory : true
  );

  const sortedItems = filteredItems.sort((a, b) =>
    sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div>
      <h1>Inventory Management</h1>
      <AddEditForm addItem={addItem} />
      <FilterSort
        setFilterCategory={setFilterCategory}
        setSortOrder={setSortOrder}
      />
      <InventoryTable
        items={sortedItems}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;

