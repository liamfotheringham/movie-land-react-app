import React, { useContext } from "react";
import MoviesContext from "../contexts/MovieContext";
import BaseContainerView from "./BaseContainerView";

function MoviesView() {
  const { movies, searchTerm, setSearchTerm, handleSearch } = useContext(MoviesContext);

  return (
    <BaseContainerView
      items={movies}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
}

export default MoviesView;