import React, { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../types/types";



// created the context in this react component so that it can be 
// used in other components without the need to prop drill

type TFeedbackItemContextProviderProps = {
  children: React.ReactNode
};
 
type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null);

const FeedbackItemsContextProvider = ({children}: TFeedbackItemContextProviderProps ) => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const companyList: string[] = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      company: companyName,
      badgeLetter: companyName.charAt(0).toUpperCase(),
      text: text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newItem]);
    //send to server

    fetch("https://bytegrad.com/course-assets/corpcomment/api/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully added feedback:", data);
      })
      .catch((error) => {
        console.error("Error adding feedback:", error);
      });
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets.projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong while fetching data.");
        console.error(errorMessage);
      }

      setIsLoading(false);
    };

    fetchFeedbacks();

    {
      /* Old promise-based approach 
    // setIsLoading(true);
    // fetch(
    //   "https://bytegrad.com/course-assets.projects/corpcomment/api/feedbacks"
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     } else {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     setFeedbackItems(data.feedbacks);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setErrorMessage(
    //       error.message || "Something went wrong while fetching data."
    //     );
    //     console.error(errorMessage);
    //     setIsLoading(false);
    //   });
    */
    }
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
