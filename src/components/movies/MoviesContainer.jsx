import React from "react";
import MovieCard from "./MovieCard.jsx";

function MoviesContainer({ moviesResource }) {
  const movies = moviesResource.read().Search || [];

  return (
    <>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
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

export default MoviesContainer;
