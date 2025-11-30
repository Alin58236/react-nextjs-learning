import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

export default function BookmarkIcon({id}: { id: number }) {
  const {
    bookmarkedIds,
    handleToggleBookmark,
  }: { bookmarkedIds: number[]; handleToggleBookmark: (id: number) => void } =
    useContext(BookmarksContext);

  console.log(bookmarkedIds);
  return (
    <button onClick={(e) => {
      
      handleToggleBookmark(id);
      e.stopPropagation();
      e.preventDefault()
      }} className="bookmark-btn">
      <BookmarkFilledIcon
        className={`
          ${bookmarkedIds.includes(id) ? "filled" : ""}
          `}
      />
    </button>
  );
}
