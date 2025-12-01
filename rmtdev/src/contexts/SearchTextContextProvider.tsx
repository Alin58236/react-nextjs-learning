import { createContext, useState } from "react";
import { TSearchTextContext } from "../types/types";
import { useDebounce } from "../lib/hooks";

export const SearchTextContext = createContext<TSearchTextContext | null>(null);

const SearchTextContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    
  const [searchText, setSearchText] = useState("");
  const debounceText = useDebounce(searchText);

  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debounceText,
        handleChangeSearchText,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
};

export default SearchTextContextProvider;
