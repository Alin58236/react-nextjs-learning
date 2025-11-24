import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets.projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(
          error.message || "Something went wrong while fetching data."
        );
        console.error(errorMessage);
        setIsLoading(false);
      });
  }, []);

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
        // structured way with single object prop const FeedbackItem = ({feedbackItem}: feedbackItemProps)
        feedbackItems.map((item) => <FeedbackItem feedbackItem={item} />)
      )}
    </ol>
  );
};

export default FeedbackList;
