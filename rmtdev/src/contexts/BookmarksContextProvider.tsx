import { useState, createContext, useEffect } from "react";

export const BookmarksContext = createContext(null);

const BookmarksContextProvider = ({ children }) => {

  //get ids from local storage only on first render
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(JSON.parse(
    localStorage.getItem("bookmarkedIds") || "[]"
  ));

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

  //save to localstorage
  useEffect(() => {
    localStorage.setItem("bookmarkedIds",JSON.stringify(bookmarkedIds));
  },[bookmarkedIds]);


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
