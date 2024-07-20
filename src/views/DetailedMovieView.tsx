import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesContext from "../contexts/MovieContext";
import ItemCard from "../components/items/ItemCard";
import Loading from "../components/utils/Loading";
import { Title } from "../contracts/MovieContract";

function MovieView() {
  const { movieId } = useParams<{ movieId: string }>();
  const context = useContext(MoviesContext);

  const [tempMovieState, setTempMovieState] = useState<Title | null>(null);

  useEffect(() => {
    if (!context?.movies) {
      return;
    }

    const movie = context.movies.find((m: Title) => m.imdbID === movieId);
    setTempMovieState(movie ?? null);
  }, [context?.movies, movieId]);

  if (!tempMovieState) {
    return <Loading />;
  }

  return <ItemCard item={tempMovieState} />;
}

export default MovieView;
