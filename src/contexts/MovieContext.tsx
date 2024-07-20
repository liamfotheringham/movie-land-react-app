import React, { createContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
import { title } from "../contracts/MovieContract";
import { fetchMovies } from "../services/MoviesService";

interface MoviesProviderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  movies: title[];
  handleSearch: () => void;
}

const MoviesContext = createContext<MoviesProviderProps | undefined>(undefined);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const MOVIE = "Star Wars";
  const [searchTerm, setSearchTerm] = useState(MOVIE);
  const [movies, setMovies] = useState<title[]>([]);

  useEffect(() => {
    async function initData() {
      const result = await fetchMovies(MOVIE);
      setMovies(result.Search);
    }

    initData();
  }, []);

  const handleSearch = async () => {
    const result = await fetchMovies(searchTerm);
    setMovies(result.Search);
  };

  if (!movies) {
    return <Loading />;
  }

  return (
    <MoviesContext.Provider value={{ searchTerm, setSearchTerm, movies, handleSearch }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
