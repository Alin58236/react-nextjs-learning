// Actual type for feedback item
export type TFeedbackItem = {
    id: number;
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string;
    daysAgo: number;
};

// Props type for FeedbackItem component -> destructured so it can be passed as an object
export type TFeedbackItemProps = {feedbackItem : TFeedbackItem};