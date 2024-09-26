import { useContext } from "react";
import SearchContext from "../contexts/SearchProvider";

const useSearch = () => {
  const { setShowSearch, setSearchVal } = useContext(SearchContext);
  return <></>
}

export default useSearch;
