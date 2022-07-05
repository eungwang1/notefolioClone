import React, { useMemo } from "react";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import { Document } from "react-pdf";
import styled from "styled-components";
import { responsivePdfWidth } from "@lib/responsiveValueList";
import { useAppSelector } from "@store/hook";
import { media } from "@styles/theme";
import LoadingSpinner from "@components/common/LoadingSpinner";
import PdfPageMobile from "./PdfPageMobile";
import PdfPagePc from "./PdfPagePc";
interface PdfDocumentProps {
  isMobileSmall: boolean;
  isMobile: boolean;
  setNumPages: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  scale: number;
  numPages: number;
}
const PdfDocument: React.FC<PdfDocumentProps> = ({
  isMobileSmall,
  isMobile,
  setNumPages,
  pageNumber,
  scale,
  numPages,
}) => {
  const pdfWidth = useMemo(() => {
    if (isMobileSmall) return responsivePdfWidth.ms;
    if (isMobile) return responsivePdfWidth.ml;
    return responsivePdfWidth.etc;
  }, [isMobile, isMobileSmall]);

  const { currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setNumPages(pdf.numPages);
  }

  const PdfPage = () =>
    isMobile ? (
      <PdfPageMobile numPages={numPages} scale={scale} pdfWidth={pdfWidth} />
    ) : (
      <PdfPagePc pageNumber={pageNumber} pdfWidth={pdfWidth} scale={scale} />
    );

  return (
    <PdfDocumentContainer>
      <Document
        file={currentNotefolio?.pdfsrc}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingSpinner height={`calc(100vh - 60px)`} />}
      >
        <PdfPage />
      </Document>
    </PdfDocumentContainer>
  );
};

export default PdfDocument;

const PdfDocumentContainer = styled.div`
  width: 100%;
  ${media.lm} {
    margin: 0 auto;
    .react-pdf__Page__canvas {
      width: 100% !important;
    }
  }

  .pdfdocument-mySwiper {
    position: relative;
  }
  .swiper-pagination-fraction {
    top: 15px;
    margin-right: auto;
    position: fixed;
    height: 10px;
    padding-left: 10px;
    text-align: start;
  }
`;
