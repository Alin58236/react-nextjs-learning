import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import PaginationControls from "./PaginationControls";
import SidebarTop from "./SidebarTop";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import { Toaster } from "react-hot-toast";
import JobListSearchCreatedJustToSolveTheDataPassingProblem from "./JobListSearchCreatedJustToSolveTheDataPassingProblem";

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          {/* This one was created just so that the entire app is not rerendering on every search */}
          <JobListSearchCreatedJustToSolveTheDataPassingProblem />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Container>
      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
