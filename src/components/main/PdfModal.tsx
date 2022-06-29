import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Page, Document } from "react-pdf";
import { opacityVariants } from "../../lib/motionVariants";
import { useMedia } from "../../lib/useMediaQuery";
import { onTogglePdfModalState } from "../../slices/notefolioSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import LoadingSpinner from "../common/LoadingSpinner";
import Modal from "../common/modal/Modal";
interface IPdfModal {
  src: string;
}
const PdfModal: React.FC<IPdfModal> = ({ src }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const { currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  const { isMobile, isMobileSmall } = useMedia();
  const maxScale = 1.4;
  const minScale = 0.6;
  const dispatch = useAppDispatch();
  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }
  const pdfModalState = useAppSelector((state) => state.notefolioSlice.pdfModalState);
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
  return (
    <div>
      <AnimatePresence>
        {pdfModalState && (
          <Modal
            modalState={pdfModalState}
            onClose={onClose}
            goNextPage={goNextPage}
            goPrevPage={goPrevPage}
            currentPage={pageNumber}
            totalPage={numPages}
            onScaleUp={onScaleUp}
            onScaleDown={onScaleDown}
            width={resposivePdfWidth * scale}
            title="테스트PDF"
          >
            <div>
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
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PdfModal;
