import { TriangleUpIcon } from '@radix-ui/react-icons'
import { TFeedbackItemProps } from '../types/types'





const FeedbackItem = ( {feedbackItem}: TFeedbackItemProps) => {
  return (
    <li key={feedbackItem.id} className="feedback">
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

        <p>{feedbackItem.daysAgo==0?"NEW":feedbackItem.daysAgo+"d"}</p>
      </li>
  )
}

export default FeedbackItem