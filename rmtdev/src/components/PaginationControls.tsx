import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { TPageDirection } from "../types/types";

export default function PaginationControls({
  resultsCount,
  onClick,
  currentPage,
}: {
  resultsCount: number;
  onClick: (direction: TPageDirection) => void;
  currentPage: number;
}) {
  const totalPages =
    resultsCount =resultsCount / 7;

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction={"previous"}
          currentPage={currentPage}
          onClick={() => onClick("previous")}
        />
      )}

      {currentPage < totalPages && (
        <PaginationButton
          direction={"next"}
          currentPage={currentPage}
          onClick={() => onClick("next")}
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
