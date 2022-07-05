import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Page, Document } from "react-pdf";
import LoadingSpinner from "../../common/LoadingSpinner";
import styled from "styled-components";

interface PdfDocumentMobileProps {
  numPages: number;
  scale: number;
  pdfWidth: number;
}

const PdfPageMobile: React.FC<PdfDocumentMobileProps> = ({ numPages, scale, pdfWidth }) => {
  return (
    <>
      <Swiper
        pagination={{ type: "fraction" }}
        modules={[Pagination, Navigation]}
        className="pdfdocument-mySwiper"
      >
        {Array.from({ length: numPages }, (v, i) => i).map((el, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Page
                pageNumber={idx + 1}
                scale={scale}
                width={pdfWidth}
                className="pdf-page"
                loading={<LoadingSpinner />}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PdfPageMobile;
