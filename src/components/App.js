import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then((res)=>res.json())
    .then((data)=>setListings(data))
  }, []);

  function onDeleteClick(deletedListing){
    let updatedListings = listings.filter((listing)=>listing.id !== deletedListing.id);
    setListings(updatedListings);
  };

  function onSubmitSearch (searchTerm) {
    let searchResults = listings.filter((listing)=>{return listing.description.toLowerCase().includes(searchTerm.toLowerCase())});
    setListings(searchResults);
  };

  return (
    <div className="app">
      <Header onSubmitSearch={onSubmitSearch} />
      <ListingsContainer listings={listings} onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
