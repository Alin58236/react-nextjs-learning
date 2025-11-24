import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../types/types";


export type TFeedbackListProps = {
  errorMessage:string ;
  isLoading:boolean ;
  feedbackItems: TFeedbackItem[]
}

const FeedbackList = ({errorMessage,isLoading,feedbackItems}:TFeedbackListProps) => {
  return (
    <ol className="feedback-list">
      <>
        {/* //unstructured way with explicit props if in feedbackItem.tsx we had const FeedbackItem = (feedbackItem: feedbackItem)  */}

        {/* {feedbackItems.map((feedbackItem) => (
          <FeedbackItem upvoteCount={feedbackItem.upvoteCount} badgeLetter={feedbackItem.badgeLetter} company={feedbackItem.company} text={feedbackItem.text} daysAgo={feedbackItem.daysAgo} />
        ))} 
        */}

        {/* // unstructured way with spread operator if in feedbackItem.tsx we had const FeedbackItem = (feedbackItem: feedbackItem)  */}
        {/* {feedbackItems.map((feedbackItem) => (
          <FeedbackItem {...feedbackItem} />
        ))} */}
      </>

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {isLoading ? (
        <Spinner />
      ) : (
        /* structured way with single object prop 
        const FeedbackItem = ({feedbackItem}: feedbackItemProps) */
        feedbackItems.map((item) => <FeedbackItem feedbackItem={item} />)
      )}
    </ol>
  );
};

export default FeedbackList;
