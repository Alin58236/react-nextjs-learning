import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";



const FeedbackList = () => {

  //access the created context values
  const context = useContext(FeedbackItemsContext);
  //mandatory! validate if context is not null
  if (!context) {
    throw new Error("FeedbackList must be used within a FeedbackItemsContextProvider");
  }

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

      {context.errorMessage ? <ErrorMessage message={context.errorMessage} /> : null}

      {context.isLoading ? (
        <Spinner />
      ) : (
        /* structured way with single object prop 
        const FeedbackItem = ({feedbackItem}: feedbackItemProps) */
        context.feedbackItems.map((item) => <FeedbackItem feedbackItem={item} />)
      )}
    </ol>
  );
};

export default FeedbackList;
