import React, { createContext, useState, useEffect } from "react";
import { createResource } from "../composables/SuspenseResource";
import { fetchMovies } from "../services/MoviesService";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const MOVIE = "Star Wars";
  const [searchTerm, setSearchTerm] = useState(MOVIE);
  const [movies, setMovies] = useState(() => createResource(fetchMovies(MOVIE)));

  useEffect(() => {
    setMovies(createResource(fetchMovies(MOVIE)));
  }, []);

  const handleSearch = () => {
    setMovies(createResource(fetchMovies(searchTerm)));
  };

  return (
    <MoviesContext.Provider value={{ searchTerm, setSearchTerm, movies, handleSearch }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
