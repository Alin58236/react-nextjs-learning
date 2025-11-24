import { useMemo, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider";

function App() {
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

  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Container/>
      </FeedbackItemsContextProvider>
      <HashtagList
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
