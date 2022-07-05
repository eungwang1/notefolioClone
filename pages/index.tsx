import React from "react";
import AppLayout from "../src/components/common/AppLayout";
import Header from "../src/components/common/header/Header";
import Nav from "../src/components/common/header/Nav";
import Category from "../src/components/main/Category";
import TopContent from "../src/components/main/topContent/TopContent";
import Notefolio from "../src/components/main/Notefolio";
import styled from "styled-components";
import wrapper from "../src/store/configureStore";
import {
  getAcademyList,
  getCreatorList,
  getNotefolioList,
  getRecruitList,
} from "../src/actions/notefolioAction";
import { onClearNotefolioList } from "../src/slices/notefolioSlice";
import Head from "next/head";
const Main = () => {
  return (
    <>
      <Head>
        <title>해피폴리오</title>
      </Head>
      <AppLayout>
        <MainContainer>
          <Header />
          <Nav />
          <TopContent />
          <Category />
          <Notefolio />
        </MainContainer>
      </AppLayout>
    </>
  );
};

export default Main;

const MainContainer = styled.div``;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { search, sort, category } = ctx.query;
  await Promise.all([
    store.dispatch(getCreatorList()),
    store.dispatch(getRecruitList()),
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
