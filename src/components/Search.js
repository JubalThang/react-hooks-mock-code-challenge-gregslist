import React, { useState } from "react";

function Search({searchQuery}) {
 

  const [searchText, setSearchText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    searchQuery(searchText)
  }

  function handleSearchText(e) {
    setSearchText(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearchText}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
