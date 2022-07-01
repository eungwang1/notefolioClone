import React from "react";
import AppLayout from "../components/common/AppLayout";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import Category from "../components/main/Category";
import Hotcontent from "../components/main/Hotcontent";
import Notefolio from "../components/main/Notefolio";
import styled from "styled-components";
import PdfModal from "../components/main/PdfModal";
import { useAppSelector } from "../store/hook";
const Main = () => {
  const pdfModalState = useAppSelector((state) => state.notefolioSlice.pdfModalState);
  return (
    <AppLayout>
      <MainContainer>
        <Header />
        <Nav />
        <Hotcontent />
        <Category />
        <Notefolio />
        {pdfModalState && <PdfModal />}
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
