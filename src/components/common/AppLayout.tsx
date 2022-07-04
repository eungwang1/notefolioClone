import { stat } from "fs";
import React, { useState } from "react";
import styled from "styled-components";
import { onTogglePdfModalState, onToggleSearchModalState } from "../../slices/notefolioSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import PdfModal from "../main/PdfModal";
import FooterMobile from "./footer/FooterMobile";
import FooterPc from "./footer/FooterPc";
import SearchInput from "./header/Search";
import Modal from "./modal/Modal";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { searchModalState } = useAppSelector((state) => state.notefolioSlice);
  const onClose = () => {
    dispatch(onToggleSearchModalState(false));
  };
  return (
    <AppLayoutContainer>
      {children}
      <FooterPc />
      <FooterMobile />
      <Modal
        title="검색"
        onClose={onClose}
        modalState={searchModalState}
        className="mobile-search-input-modal"
      >
        <SearchInput size="large" className="mobile-search-input-container" onAfterSearch={onClose} />
      </Modal>
      <PdfModal />
    </AppLayoutContainer>
  );
};

export default AppLayout;

const AppLayoutContainer = styled.div`
  width: 100vw;

  .mobile-search-input-modal {
    .modal-container,
    .modal-wrapper {
      width: 100%;
    }
  }
  .mobile-search-input-container {
    margin-top: 30px;
    .search {
      top: 5px;
    }
  }
`;
