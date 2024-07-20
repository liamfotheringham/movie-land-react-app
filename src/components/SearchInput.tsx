import React from "react";
// import SearchIcon from "../assets/search.svg";

function SearchInput({ searchTerm, setSearchTerm, onSearch }: { searchTerm: string, setSearchTerm: Function, onSearch: () => void }) {
  return (<div className="search">
    <input
      placeholder="search here..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <img
      // src={SearchIcon}
      alt="Search Magnifier Logo"
      onClick={onSearch}
    />
  </div>)
};

export default SearchInput