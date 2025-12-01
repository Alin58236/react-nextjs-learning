import { useJobItemsContext } from "../lib/hooks"
import JobList from "./JobList"


const JobListSearchCreatedJustToSolveTheDataPassingProblem = () => {
  
    const {jobItemsSliced,isLoading} = useJobItemsContext();
  
    return (
    <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
  )
}

export default JobListSearchCreatedJustToSolveTheDataPassingProblem