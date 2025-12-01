import { useActiveIdContext } from "../lib/hooks";
import { TJobItem } from "../types/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type TJobListProps = {
  jobItems: TJobItem[],
  isLoading: boolean
}

//dumb component on purpose, so we dont mix the 
//actual sliced items with the bookmarked items
export function JobList({jobItems, isLoading}:TJobListProps) {


  const {activeId} = useActiveIdContext();

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
