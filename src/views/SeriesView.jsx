import React, { useContext } from "react";
import SeriesContext from "../contexts/SeriesContext";
import BaseContainerView from "./BaseContainerView";

function SeriesView() {
  const { series, searchTerm, setSearchTerm, handleSearch } = useContext(SeriesContext);

  return (
    <BaseContainerView
      items={series}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
}

export default SeriesView