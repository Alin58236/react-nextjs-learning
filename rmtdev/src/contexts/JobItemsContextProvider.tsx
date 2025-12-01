import { createContext, useCallback, useMemo, useState } from "react";
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
  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === "relevance") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [sortBy, jobItems]
  );

  const jobItemsSliced = useMemo(
    () => jobItemsSorted?.slice((currentPage - 1) * 7, currentPage * 7) || [],

    [jobItemsSorted, currentPage]
  );

  //useCallback is basically useMemo but for functions!!!

  const handleSortBy = useCallback((newSortBy: TSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  },[])

  const handleChangePage = useCallback((direction: TPageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      if (currentPage <= 1) {
        setCurrentPage(1);
      } else setCurrentPage((prev) => prev - 1);
    }
  },[currentPage])

  //this way the context doesnt create objects at every change of state in the context
  const contextValue = useMemo(
    () => ({
      jobItems,
      jobItemsSliced,
      isLoading,
      resultsCount,
      currentPage,
      sortBy,
      handleChangePage,
      handleSortBy,
    }),
    //whenever any of these change, only then recreate the whole object
    [jobItems,
      jobItemsSliced,
      isLoading,
      resultsCount,
      currentPage,
      sortBy,
      handleChangePage,
      handleSortBy,]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
};

export default JobItemsContextProvider;
