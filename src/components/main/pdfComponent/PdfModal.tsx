import { AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { convertToDateTime } from "@lib/convertToDateTime";
import { useMedia } from "@lib/useMediaQuery";
import { onTogglePdfModalState } from "@slices/notefolioSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import Modal from "@components/common/modal/Modal";
import PdfDocument from "./PdfDocument";

const PdfModal: React.FC = () => {
  const { currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  const pdfModalState = useAppSelector((state) => state.notefolioSlice.pdfModalState);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const { isMobile, isMobileSmall } = useMedia();
  const maxScale = 1.4;
  const minScale = 0.6;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setPageNumber(1);
  }, [pdfModalState]);
  const onClose = () => {
    dispatch(onTogglePdfModalState(false));
  };
  const goNextPage = () => {
    if (numPages > pageNumber) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };
  const goPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((pageNumber) => pageNumber - 1);
    }
  };
  const onScaleUp = () => {
    if (scale < maxScale) {
      setScale((scale) => scale + 0.2);
    }
  };
  const onScaleDown = () => {
    if (scale > minScale) {
      setScale((scale) => scale - 0.2);
    }
  };

  const resposivePdfWidth = useMemo(() => {
    if (isMobileSmall) return 350;
    if (isMobile) return 550;
    return 700;
  }, [isMobile, isMobileSmall]);
  const modalProps = {
    modalState: pdfModalState,
    onClose,
    goNextPage,
    goPrevPage,
    currentPage: pageNumber,
    totalPage: numPages,
    onScaleUp,
    onScaleDown,
    date: convertToDateTime(currentNotefolio?.createdAt as string),
    width: resposivePdfWidth * scale,
    modalNav: true,
    title: "테스트PDF",
    item: currentNotefolio,
    src: currentNotefolio ? currentNotefolio.pdfsrc : "",
    heartCount: currentNotefolio?.likedUserList.length,
    id: currentNotefolio?.id,
  };

  const pdfDocumentProps = {
    isMobile,
    isMobileSmall,
    pageNumber,
    scale,
    numPages,
    setNumPages,
    setPageNumber,
  };
  return (
    <PdfModalContainer>
      <AnimatePresence>
        <Modal {...modalProps}>
          <PdfDocument {...pdfDocumentProps} />
        </Modal>
      </AnimatePresence>
    </PdfModalContainer>
  );
};

export default PdfModal;

const PdfModalContainer = styled.div`
  width: 100%;
`;
