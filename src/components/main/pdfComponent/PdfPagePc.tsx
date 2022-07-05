import { motion } from "framer-motion";
import React from "react";
import { opacityVariants } from "../../../lib/motionVariants";
import { Page } from "react-pdf";
import LoadingSpinner from "../../common/LoadingSpinner";
interface PdfDocumentProps {
  pageNumber: number;
  scale: number;
  pdfWidth: number;
}
const PdfPagePc: React.FC<PdfDocumentProps> = ({ pageNumber, scale, pdfWidth }) => {
  return (
    <>
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
          width={pdfWidth}
          className="pdf-page"
          loading={<LoadingSpinner />}
        />
      </motion.div>
    </>
  );
};

export default PdfPagePc;
