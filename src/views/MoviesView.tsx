import React, { useContext } from "react";
import Loading from "../components/Loading";
import MoviesContext from "../contexts/MovieContext";
import BaseContainerView from "./BaseContainerView";

function MoviesView() {
  const context = useContext(MoviesContext);

  if(!context){
    return <Loading />
  }

  const { movies, searchTerm, setSearchTerm, handleSearch } = context;

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