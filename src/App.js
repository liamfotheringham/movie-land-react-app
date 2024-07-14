import "./App.css";

import React, { useState, useEffect, Suspense } from "react";
import { createResource } from "./composables/SuspenseResource";
import { fetchMovies } from "./services/MoviesService";

import Loading from "./components/Loading";
import MoviesContainer from "./components/movies/MoviesContainer";
import SearchInput from "./components/SearchInput";

const MOVIE = "Star Wars"

function App() {
  const [searchTerm, setSearchTerm] = useState(MOVIE);
  const [movies, setMovies] = useState(() => createResource(fetchMovies(MOVIE)));

  useEffect(() => {
    setMovies(createResource(fetchMovies(MOVIE)));
  }, []);

  function handleSearch() {
    setMovies(createResource(fetchMovies(searchTerm)));
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      >
      </SearchInput>
      <Suspense fallback={<Loading />}>
        <MoviesContainer moviesResource={movies} />
      </Suspense>
    </div>
  );
}

export default App;
