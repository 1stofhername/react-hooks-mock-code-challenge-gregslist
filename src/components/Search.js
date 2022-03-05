import React, { useState } from "react";

function Search({ onSubmitSearch }) {
  const[searchBy, setSearchBy]=useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitSearch(searchBy);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBy ? searchBy : ""}
        onChange={(e) => {setSearchBy(e.target.value); console.log(searchBy)}}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
