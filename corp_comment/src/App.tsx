import { useEffect, useMemo, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./types/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  //wrapped the logic in useMemo to avoid unnecessary recalculations on each render
  //basically just rerenders when feedbackItems or selectedCompany changes
  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

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
    <div className="app">
      <Footer />

      <Container
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={filteredFeedbackItems}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
