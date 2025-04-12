import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search for expenses"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
