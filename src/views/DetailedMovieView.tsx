import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesContext from "../contexts/MovieContext";
import ItemCard from "../components/items/ItemCard";
import Loading from "../components/Loading";

function MovieView() {
  const { movieId } = useParams();
  const { movies }: any = useContext(MoviesContext);

  const [tempMovieState, setTempMovieState] = useState(null);

  useEffect(() => {
    if (movies == null) {
      return;
    }

    const movie = movies.read().Search.find((m: any) => m.imdbID === movieId);
    setTempMovieState(movie);
  }, [movies, movieId]);

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
