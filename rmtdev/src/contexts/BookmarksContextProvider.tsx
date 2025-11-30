import { useState, createContext } from "react";

export const BookmarksContext = createContext(null);

const BookmarksContextProvider = ({ children }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const handleToggleBookmark = (id: number) => {
    console.log("checking for: ", id )
    if (bookmarkedIds.includes(id)) {
      console.log("removing: ",id)
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      console.log("adding: ",id)
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContextProvider;
