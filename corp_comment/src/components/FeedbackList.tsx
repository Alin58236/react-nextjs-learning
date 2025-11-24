
import FeedbackItem from "./FeedbackItem"


const feedbackItems = [{
    upvoteCount: 42,
    badgeLetter: "B",
    company: "Example Corp",
    text: "This is a sample feedback item.",
    daysAgo: 4
} , {
    upvoteCount: 2,
    badgeLetter: "B",
    company: "Example Corp",
    text: "T2222222222222222222222222.",
    daysAgo: 4
} ]

const FeedbackList = () => {
  return (
    <ol className='feedback-list'>
      
      
        {/* //unstructured way with explicit props if in feedbackItem.tsx we had const FeedbackItem = (feedbackItem: feedbackItem)  */}

        {/* {feedbackItems.map((feedbackItem) => (
          <FeedbackItem upvoteCount={feedbackItem.upvoteCount} badgeLetter={feedbackItem.badgeLetter} company={feedbackItem.company} text={feedbackItem.text} daysAgo={feedbackItem.daysAgo} />
        ))} 
        */}
     

              
        {/* // unstructured way with spread operator if in feedbackItem.tsx we had const FeedbackItem = (feedbackItem: feedbackItem)  */}
        {/* {feedbackItems.map((feedbackItem) => (
          <FeedbackItem {...feedbackItem} />
        ))} */}

      


      {// structured way with single object prop const FeedbackItem = ({feedbackItem}: feedbackItemProps) 
      feedbackItems.map((item) => (
        <FeedbackItem feedbackItem={item} />
      ))
      }


    </ol>
  )
}

export default FeedbackList