import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItemProps } from "../types/types";
import { useState } from "react";

const FeedbackItem = ({ feedbackItem }: TFeedbackItemProps) => {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the li onClick from firing (by default the event propagates up)
    e.currentTarget.disabled = true; // Disable the button after one click
    setUpvoteCount((prev) => prev + 1);
  }

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      key={feedbackItem.id}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p className="feedback-text">{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p className="feedback-text">{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo == 0 ? "NEW" : feedbackItem.daysAgo + "d"}</p>
    </li>
  );
};

export default FeedbackItem;
