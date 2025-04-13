import React from "react";
import './App.css'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div id="search-bar">
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
