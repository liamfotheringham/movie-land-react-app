import React, { Suspense, useContext } from "react";
import MoviesContext from "../contexts/MovieContext";
import Loading from "../components/Loading";
import MoviesContainer from "../components/movies/MoviesContainer";
import SearchInput from "../components/SearchInput";

function MoviesView() {
  const { searchTerm, setSearchTerm, movies, handleSearch } = useContext(MoviesContext);

  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <Suspense fallback={<Loading />}>
        <MoviesContainer moviesResource={movies} />
      </Suspense>
    </>
  );
}

export default MoviesView;
