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

      <SortingButton onClick={() => onClick("relevance")} isActive={sortBy==="relevance"}>Relevant</SortingButton>
      <SortingButton onClick={() => onClick("recent") } isActive={sortBy==="recent"}>Recent</SortingButton>

    </section>
  );
}

type TSortingControls= {
  children: React.ReactNode;
  onClick: (newSortBy: TSortBy) => void;
  isActive : boolean; 
}

export function SortingButton({children, onClick, isActive}: TSortingControls) {
  return (
    <button
        onClick={() => onClick("relevance")}
        className={`sorting__button sorting__button--relevant ${
          isActive ? "sorting__button--active" : ""
        }`}
      >
        {children}
      </button>
  )
}

