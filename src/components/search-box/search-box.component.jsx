import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleOnChange }) => (

  <input
    className="search"
    type="Search"
    placeholder={placeholder}
    onChange={handleOnChange}
  />
  
);