import { createContext, useState } from "react";
import { TJobItemsContext, TPageDirection, TSortBy } from "../types/types";
import { useSearchQuery, useSearchTextContext } from "../lib/hooks";

export const JobItemsContext = createContext<TJobItemsContext | null>(null);

const JobItemsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  //dependency on the searchTextContext  
  const { debounceText } = useSearchTextContext();

  //state
  const { jobItems, isLoading } = useSearchQuery(debounceText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>("relevance");

  //derived state
  const resultsCount = jobItems?.length || 0;

  //prevent mutating the original jobItems Array
  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === "relevance") {
      return b.relevanceScore - a.relevanceScore;
    }
    return a.daysAgo - b.daysAgo;
  });

  const jobItemsSliced =
    jobItemsSorted?.slice((currentPage - 1) * 7, currentPage * 7) || [];

  const handleSortBy = (newSortBy: TSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const handleChangePage = (direction: TPageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      if (currentPage <= 1) {
        setCurrentPage(1);
      } else setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSliced,
        isLoading,
        resultsCount,
        currentPage,
        sortBy,
        handleChangePage,
        handleSortBy,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
};

export default JobItemsContextProvider;
