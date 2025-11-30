import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useState } from "react";
import { useBookmarksContext } from "../lib/hooks";

export default function BookmarksButton() {

  const [isOpen,setIsOpen] = useState(false);

  const {bookmarkedJobItems, isLoading} = useBookmarksContext();

  console.log(isOpen)
  return (
    <section>
      <button onClick={() => setIsOpen((prev) => !prev)} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen&&<BookmarksPopover/>}
      
    </section>
  );
}
