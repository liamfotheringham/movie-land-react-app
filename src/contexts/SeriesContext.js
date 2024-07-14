import React, { createContext, useState, useEffect } from "react";
import { createResource } from "../composables/SuspenseResource";
import { fetchSeries } from "../services/MoviesService";

const SeriesContext = createContext();

export const SeriesProvider = ({ children }) => {
  const SERIES = "Pokemon";
  const [searchTerm, setSearchTerm] = useState(SERIES);
  const [series, setSeries] = useState(() => createResource(fetchSeries(SERIES)));

  useEffect(() => {
    setSeries(createResource(fetchSeries(SERIES)));
  }, []);

  const handleSearch = () => {
    setSeries(createResource(fetchSeries(searchTerm)));
  };

  return (
    <SeriesContext.Provider value={{ searchTerm, setSearchTerm, series, handleSearch }}>
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContext;
