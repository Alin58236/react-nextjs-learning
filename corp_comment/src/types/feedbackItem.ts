
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