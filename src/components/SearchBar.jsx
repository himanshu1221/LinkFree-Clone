import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Search by GitHub Username' value={searchTerm} onChange={handleInputChange} />
        <button type="submit"><img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"/></button>
    </form>
  );
}

export default SearchBar;