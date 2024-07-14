import React, { Suspense } from "react";
import ItemsContainer from "../components/items/ItemContainer";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";

function BaseContainerView({items, searchTerm, setSearchTerm, handleSearch}) {
  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      
      <Suspense fallback={<Loading />}>
        <ItemsContainer itemsResource={items} />
      </Suspense>
    </>
  );
}

export default BaseContainerView;
