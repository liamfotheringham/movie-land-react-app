import React, { useContext } from "react";
import Loading from "../components/utils/Loading";
import SeriesContext from "../contexts/SeriesContext";
import BaseContainerView from "./BaseContainerView";

function SeriesView() {
  const context = useContext(SeriesContext);

  if(!context){
    return <Loading />
  }

  const { series, searchTerm, setSearchTerm, handleSearch } = context;

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