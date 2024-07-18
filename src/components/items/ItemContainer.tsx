import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

function ItemsContainer({ itemsResource }: any) {
  const items = itemsResource.read().Search || [];

  return (
    <>
      {items.length > 0 ? (
        <div className="container">
          {items.map((item: any) => (
            <Link key={item.imdbID} to={`/movies/${item.imdbID}`}>
              <ItemCard key={item.imdbID} item={item} />
            </Link>
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
