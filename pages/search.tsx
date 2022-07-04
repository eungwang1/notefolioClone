import React from "react";
import styled from "styled-components";
import AppLayout from "../src/components/common/AppLayout";
import Header from "../src/components/common/header/Header";
import Nav from "../src/components/common/header/Nav";
import SearchInput from "../src/components/common/header/Search";
import Category from "../src/components/main/Category";
import Notefolio from "../src/components/main/Notefolio";
import PdfModal from "../src/components/main/PdfModal";
import SearchResult from "../src/components/search/SearchResult";
import { useAppSelector } from "../src/store/hook";

const Search = () => {
  const pdfModalState = useAppSelector((state) => state.notefolioSlice.pdfModalState);
  return (
    <AppLayout>
      <SearchContainer>
        <Header />
        <Nav searchInput={false} />
        <div className="search-input-wrapper">
          <SearchInput size="large" />
          <SearchResult />
        </div>
        <Category />
        <Notefolio />
        {pdfModalState && <PdfModal />}
      </SearchContainer>
    </AppLayout>
  );
};
export default Search;

const SearchContainer = styled.div`
  .search-input-container {
    height: 100%;
  }

  .search-input-wrapper {
    padding: 30px 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
