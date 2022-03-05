import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteClick }) {
 

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>{ 
          return(
          <ListingCard key={listing.id} listing={listing} onDeleteClick={onDeleteClick} />
          )}
          )
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
