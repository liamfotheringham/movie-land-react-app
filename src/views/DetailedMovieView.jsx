import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesContext from "../contexts/MovieContext";
import ItemCard from "../components/items/ItemCard";
import Loading from "../components/Loading";

function MovieView() {
  const { movieId } = useParams();
  const { movies } = useContext(MoviesContext);
  const resolvedMovies = movies.read().Search;

  const [tempMovieState, setTempMovieState] = useState(null);

  useEffect(() => {
    if (resolvedMovies == null) {
      return;
    }

    const movie = resolvedMovies.find(m => m.imdbID === movieId);
    setTempMovieState(movie);
  }, [resolvedMovies, movieId]);

  if (!tempMovieState) {
    return (
      <Loading />
    );
  }

  return (
    <ItemCard item={tempMovieState} />
  );
}

export default MovieView;
