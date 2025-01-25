
import React from 'react';

const FilterSort = ({ setFilterCategory, setSortOrder }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <select onChange={(e) => setFilterCategory(e.target.value)} style={{ padding: '10px', marginRight: '10px' }}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>
      <button onClick={() => setSortOrder('asc')} style={{ marginRight: '10px' }}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
    </div>
  );
};

export default FilterSort;
