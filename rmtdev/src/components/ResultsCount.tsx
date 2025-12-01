import { useJobItemsContext } from "../lib/hooks";

export default function ResultsCount() {

  const {resultsCount} = useJobItemsContext()

  return <p className="count">{resultsCount} results</p>;
}
