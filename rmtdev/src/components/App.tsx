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
import { Toaster } from "react-hot-toast";

function App() {

  //state
  const [searchText, setSearchText] = useState("");
  const debounceText = useDebounce(searchText)
  const { jobItems, isLoading } = useJobItems(debounceText);
  const [currentPage, setCurrentPage] = useState(1);
  
  
  //derived state
  const resultsCount = jobItems?.length || 0;
   

  const jobItemsSliced = jobItems?.slice((currentPage-1)*7,currentPage*7) || []
 
  //handlers
  const handleChangePage = (direction: "next" | "previous") => {

    if(direction ==="next"){
      setCurrentPage((prev) => prev+1)
    } else if (direction==="previous"){
      if(currentPage<=1){
        setCurrentPage(1)
      }
      else
      setCurrentPage((prev) => prev-1)
    }
    console.log("changed to "+currentPage)
  }

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm setCurrentPage={setCurrentPage} setSearchText={setSearchText} searchText={searchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount count={resultsCount} />
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />

          <PaginationControls resultsCount={resultsCount} currentPage={currentPage} onClick={handleChangePage}/>
        </Sidebar>

        <JobItemContent />
      </Container>
      <Footer />


      <Toaster position="top-right" />
    </>
  );
}

export default App;
