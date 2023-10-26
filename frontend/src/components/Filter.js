import React, { useState } from 'react';

const Filter = ({ applyFilter }) => {
  const [filterInput, setFilterInput] = useState('');

  const handleInputChange = (event) => {
    setFilterInput(event.target.value);
  };

  const handleFilterApply = () => {
    applyFilter(filterInput);
  };

  return (
    <div className="filter-component">
      <input
        type="text"
        placeholder="Enter filter criteria"
        value={filterInput}
        onChange={handleInputChange}
      />
      <button onClick={handleFilterApply}>Apply Filter</button>
    </div>
  );
};

export default Filter;