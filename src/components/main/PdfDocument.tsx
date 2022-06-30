import { motion } from "framer-motion";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import React, { useMemo, useState } from "react";
import { Page, Document } from "react-pdf";
import styled from "styled-components";
import { opacityVariants } from "../../lib/motionVariants";
import { responsivePdfWidth } from "../../lib/responsiveValueList";
import { useAppSelector } from "../../store/hook";
import LoadingSpinner from "../common/LoadingSpinner";
interface PdfDocumentProps {
  isMobileSmall: boolean;
  isMobile: boolean;
  setNumPages: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  scale: number;
}
const PdfDocument: React.FC<PdfDocumentProps> = ({
  isMobileSmall,
  isMobile,
  setNumPages,
  pageNumber,
  scale,
}) => {
  const resposivePdfWidth = useMemo(() => {
    if (isMobileSmall) return responsivePdfWidth.ms;
    if (isMobile) return responsivePdfWidth.ml;
    return responsivePdfWidth.etc;
  }, [isMobile, isMobileSmall]);

  const { currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setNumPages(pdf.numPages);
  }

  return (
    <PdfDocumentContainer>
      <Document
        file={currentNotefolio?.pdfsrc}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingSpinner />}
      >
        <motion.div
          key={pageNumber}
          variants={opacityVariants(0.5)}
          initial="initial"
          animate="animate"
          exit="leaving"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            width={resposivePdfWidth}
            className="pdf-page"
            loading={<LoadingSpinner />}
          />
        </motion.div>
      </Document>
    </PdfDocumentContainer>
  );
};

export default PdfDocument;

const PdfDocumentContainer = styled.div``;
