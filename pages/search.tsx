import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { getAcademyList, getNotefolioList } from "@actions/notefolioAction";
import AppLayout from "@components/common/AppLayout";
import Header from "@components/common/header/Header";
import Nav from "@components/common/header/Nav";
import SearchInput from "@components/common/header/Search";
import Category from "@components/main/Category";
import Notefolio from "@components/main/Notefolio";
import SearchResult from "@components/search/SearchResult";
import useScrollRestoration from "@lib/useScrollRestoration";
import { onClearNotefolioList } from "@slices/notefolioSlice";
import wrapper from "@store/configureStore";

const Search = () => {
  const router = useRouter();
  const { category, sort } = router.query;
  useScrollRestoration("main", [category as string, sort as string]);

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { search, sort, category } = ctx.query;

  await Promise.all([
    store.dispatch(getAcademyList()),
    store.dispatch(onClearNotefolioList()),
    store.dispatch(
      getNotefolioList({
        search: search ? (search as string) : "",
        sort: sort ? (sort as string) : "",
        category: category ? (category as string) : "",
        page: 0,
      })
    ),
  ]);

  return { props: {} };
});
