import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import SearchInput from "../components/common/header/Search";
import Category from "../components/main/Category";
import Notefolio from "../components/main/Notefolio";
import PdfModal from "../components/main/PdfModal";
import SearchResult from "../components/search/SearchResult";

const Search = () => {
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
        <PdfModal />
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
