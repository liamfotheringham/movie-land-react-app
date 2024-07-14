import { createContext, useEffect, useState } from "react";
import { createResource } from "../composables/SuspenseResource";
import { fetchMovies } from "../services/MoviesService";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const MOVIE = "Indiana Jones"

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(createResource(fetchMovies(MOVIE)));
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  )
};

export { MovieContext, MovieProvider };