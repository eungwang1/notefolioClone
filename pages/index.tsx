import React from "react";
import styled from "styled-components";
import { getAcademyList, getCreatorList, getNotefolioList, getRecruitList } from "@actions/notefolioAction";
import { useRouter } from "next/router";
import AppLayout from "@components/common/AppLayout";
import Header from "@components/common/header/Header";
import Nav from "@components/common/header/Nav";
import Category from "@components/main/Category";
import Notefolio from "@components/main/Notefolio";
import wrapper from "@store/configureStore";
import { onClearNotefolioList } from "@slices/notefolioSlice";
import dynamic from "next/dynamic";
import LoadingSpinner from "@components/common/LoadingSpinner";
const TopContent = dynamic(() => import("@components/main/topContent/TopContent"), {
  loading: () => <LoadingSpinner />,
});
const Main = () => {
  const {
    query: { category, sort },
  } = useRouter();
  return (
    <AppLayout>
      <MainContainer>
        <Header />
        <Nav />
        <TopContent />
        <Category />
        <Notefolio />
      </MainContainer>
    </AppLayout>
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
