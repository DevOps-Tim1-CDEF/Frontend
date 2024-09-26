import { createContext, useState } from "react";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(true);
  const [searchVal, setSearchVal] = useState("");

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch, searchVal, setSearchVal }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
