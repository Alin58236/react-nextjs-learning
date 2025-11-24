import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";



const FeedbackList = () => {

  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://bytegrad.com/course-assets.projects/corpcomment/api/feedbacks')
      .then((response) => response.json())
      .then(data => {
        setFeedbackItems(data.feedbacks)
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



      {
        isLoading ? <Spinner /> :
        // structured way with single object prop const FeedbackItem = ({feedbackItem}: feedbackItemProps)
        feedbackItems.map((item) => (
          <FeedbackItem feedbackItem={item} />
        ))
      }
    </ol>
  );
};

export default FeedbackList;
