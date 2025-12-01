import { useActiveId } from "../lib/hooks";
import { TJobItem } from "../types/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({
  jobItems,
  isLoading,
}: {
  jobItems: TJobItem[];
  isLoading: boolean;
}) {
  const activeId = useActiveId();

  return (
    <ul className="job-list">
      {isLoading ? <Spinner />:
      
      jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))
      
      }

    </ul>
  );
}

export default JobList;
