import React from "react";
import ItemCard from "./ItemCard.jsx";

function ItemsContainer({ itemsResource }) {
  const items = itemsResource.read().Search || [];

  return (
    <>
      {items.length > 0 ? (
        <div className="container">
          {items.map((item) => (
            <ItemCard key={item.imdbID} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
}

export default ItemsContainer;
