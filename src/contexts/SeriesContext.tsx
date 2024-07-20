import React, { createContext, useState, useEffect } from "react";
import Loading from "../components/utils/Loading";
import { Title } from "../contracts/MovieContract";
import { fetchSeries } from "../services/MoviesService";

interface SeriesProviderProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  series: Title[],
  handleSearch: () => void,
}

const SeriesContext = createContext<SeriesProviderProps | null>(null);

export const SeriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const SERIES = "Pokemon";
  const [searchTerm, setSearchTerm] = useState(SERIES);
  const [series, setSeries] = useState<Title[]>();

  useEffect(() => {
    async function initData() {
      const result = await fetchSeries(SERIES);
      setSeries(result.Search);
    }

    initData();
  }, []);

  const handleSearch = async () => {
    const result = await fetchSeries(searchTerm)
    setSeries(result.Search);
  };

  if (!series) {
    return <Loading />
  }

  return (
    <SeriesContext.Provider value={{ searchTerm, setSearchTerm, series, handleSearch }}>
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContext;
