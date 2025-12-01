import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useEffect, useState } from "react";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      //daca nu ma dat click pe buton, sa nu ruleze asta
      //mare workaround ce am putut face aici...
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".bookmarks-btn") &&
        !e.target.closest(".bookmarks-popover")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover />}
    </section>
  );
}
