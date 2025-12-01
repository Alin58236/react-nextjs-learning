import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../lib/hooks";
import { TBookmarksContext } from "../types/types";



export const BookmarksContext = createContext<TBookmarksContext | null>(null);

const BookmarksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //get ids from local storage only on first render
  //starting with an empty array as the initialValue
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );

  const { jobItems: bookmarkedJobItems, isLoading } =
    useJobItems(bookmarkedIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
        bookmarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContextProvider;
