import { TriangleUpIcon } from '@radix-ui/react-icons'


// Actual type for feedback item
export type feedbackItem = {
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string;
    daysAgo: number;
};

// Props type for FeedbackItem component -> destructured so it can be passed as an object
export type  feedbackItemProps = {feedbackItem : feedbackItem};



const FeedbackItem = ({feedbackItem}: feedbackItemProps) => {
  return (
    <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>{feedbackItem.upvoteCount}</span>
        </button>
        <div>
          <p className="feedback-text">{feedbackItem.badgeLetter}</p>
        </div>
        <div>
          <p className="feedback-text">{feedbackItem.company}</p>
          <p>{feedbackItem.text}</p>
        </div>

        <p>{feedbackItem.daysAgo}d</p>
      </li>
  )
}

export default FeedbackItem