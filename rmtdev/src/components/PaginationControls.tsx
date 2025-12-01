import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { TPageDirection } from "../types/types";
import { useJobItemsContext } from "../lib/hooks";

export default function PaginationControls() {

  const {currentPage,resultsCount, handleChangePage} = useJobItemsContext();


  const totalPages = resultsCount / 7;

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction={"previous"}
          currentPage={currentPage}
          onClick={() => handleChangePage("previous")}
        />
      )}

      {currentPage < totalPages && (
        <PaginationButton
          direction={"next"}
          currentPage={currentPage}
          onClick={() => handleChangePage("next")}
        />
      )}
    </section>
  );
}

export function PaginationButton({
  direction,
  currentPage,
  onClick,
}: {
  direction: TPageDirection;
  currentPage: number;
  onClick: () => void;
}) {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={onClick}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
