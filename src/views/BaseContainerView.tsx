import React from "react";
import ItemsContainer from "../components/items/ItemContainer";
import SearchInput from "../components/SearchInput";
import { title } from "../contracts/MovieContract";

function BaseContainerView({ items, searchTerm, setSearchTerm, handleSearch }: { items: title[], searchTerm: string, setSearchTerm: Function, handleSearch: () => void }) {
  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      <ItemsContainer items={items} />s
    </>
  )
}

export default BaseContainerView;
