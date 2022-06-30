import React from "react";
import AppLayout from "../components/common/AppLayout";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import Category from "../components/main/Category";
import Hotcontent from "../components/main/Hotcontent";
import Notefolio from "../components/main/Notefolio";
import styled from "styled-components";
import PdfModal from "../components/main/PdfModal";
const Main = () => {
  return (
    <AppLayout>
      <MainContainer>
        <Header />
        <Nav />
        <Hotcontent />
        <Category />
        <Notefolio />
        <PdfModal />
      </MainContainer>
    </AppLayout>
  );
};

export default Main;

const MainContainer = styled.div`
  .pdf-page {
    transition: all 0.2s;
  }
`;
