import Header from "./Header";
import FeedbackList from "./FeedbackList";
import { TFeedbackItem } from "../types/types";

type TContainerProps = {
  errorMessage: string;
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

const Container = ({
  errorMessage,
  isLoading,
  feedbackItems,
  handleAddToList,
}: TContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </main>
  );
};

export default Container;
