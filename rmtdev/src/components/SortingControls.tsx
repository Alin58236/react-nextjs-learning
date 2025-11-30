import { TSortBy } from "../types/types";

export default function SortingControls({
  sortBy,
  onClick,
}: {
  sortBy: string;
  onClick: (arg: TSortBy) => void;
}) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        onClick={() => onClick("relevance")}
        className={`sorting__button sorting__button--relevant ${
          sortBy === "relevance" ? "sorting__button--active" : ""
        }`}
      >
        Relevant
      </button>

      <button
        onClick={() => onClick("recent")}
        className={`sorting__button sorting__button--recent ${
          sortBy === "recent" ? "sorting__button--active" : ""
        }`}
      >
        Recent
      </button>
    </section>
  );
}
