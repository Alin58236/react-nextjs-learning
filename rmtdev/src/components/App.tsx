import { useState } from "react";
import { useDebounce, useJobItems } from "../lib/hooks";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import SidebarTop from "./SidebarTop";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

function App() {
  const [searchText, setSearchText] = useState("");
  const debounceText = useDebounce(searchText)
  const { jobItems, jobItemsSliced, isLoading } = useJobItems(debounceText);
  const resultsCount = jobItems.length;


 

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm setSearchText={setSearchText} searchText={searchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount count={resultsCount} />
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
