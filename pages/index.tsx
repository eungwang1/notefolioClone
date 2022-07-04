import React from "react";
import AppLayout from "../src/components/common/AppLayout";
import Header from "../src/components/common/header/Header";
import Nav from "../src/components/common/header/Nav";
import Category from "../src/components/main/Category";
import Hotcontent from "../src/components/main/Hotcontent";
import Notefolio from "../src/components/main/Notefolio";
import styled from "styled-components";
import PdfModal from "../src/components/main/PdfModal";
import { useAppSelector } from "../src/store/hook";
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
