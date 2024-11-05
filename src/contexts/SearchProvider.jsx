import { createContext, useState } from "react";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch, searchVal, setSearchVal, filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
