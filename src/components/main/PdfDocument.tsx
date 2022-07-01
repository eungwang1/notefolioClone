import { motion } from "framer-motion";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import React, { useMemo, useState } from "react";
import { Page, Document } from "react-pdf";
import styled from "styled-components";
import { opacityVariants } from "../../lib/motionVariants";
import { responsivePdfWidth } from "../../lib/responsiveValueList";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import LoadingSpinner from "../common/LoadingSpinner";
import { media } from "../../styles/theme";
interface PdfDocumentProps {
  isMobileSmall: boolean;
  isMobile: boolean;
  setNumPages: React.Dispatch<React.SetStateAction<number>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  scale: number;
  numPages: number;
}
const PdfDocument: React.FC<PdfDocumentProps> = ({
  isMobileSmall,
  isMobile,
  setNumPages,
  pageNumber,
  setPageNumber,
  scale,
  numPages,
}) => {
  const dispatch = useAppDispatch();
  const resposivePdfWidth = useMemo(() => {
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
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Navigation]}
        className="hotcontent-mySwiper"
        // onSlideChange={(swiper) => {
        //   dispatch(onChangePdfPageNumber(swiper.activeIndex));
        // }}
      >
        {Array.from({ length: numPages }, (v, i) => i).map((el, idx) => {
          return (
            <SwiperSlide>
              <Page
                pageNumber={idx + 1}
                scale={scale}
                width={resposivePdfWidth}
                className="pdf-page"
                loading={<LoadingSpinner />}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    ) : (
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
    );

  return (
    <PdfDocumentContainer>
      <Document
        file={currentNotefolio?.pdfsrc}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingSpinner />}
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
`;
