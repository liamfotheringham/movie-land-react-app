import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { title } from "../../contracts/MovieContract";

function ItemsContainer({ items }: {items: title[]}) {
  return (
    <>
      {items.length > 0 ? (
        <div className="container">
          {items.map((item: title) => (
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
