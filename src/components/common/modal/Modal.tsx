import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";
import { opacityVariants, verticalVariants } from "../../../lib/motionVariants";
import { useMedia } from "../../../lib/useMediaQuery";
import { hoverStyle01, media } from "../../../styles/theme";
import ModalSideNav from "./ModalSideNav";
interface ModalProps {
  children?: React.ReactNode;
  modalState?: boolean;
  totalPage?: number;
  currentPage?: number;
  className?: string;
  width?: number;
  title?: string;
  modalNav?: boolean;
  onClose?: () => void;
  goNextPage?: () => void;
  onScaleUp?: () => void;
  onScaleDown?: () => void;
  goPrevPage?: () => void;
  animation?: "vertical" | "opacity";
  src?: string;
  heartCount?: number;
  date?: string;
}
const Modal: React.FC<ModalProps> = ({
  children,
  onScaleUp,
  className,
  onScaleDown,
  onClose,
  goNextPage,
  goPrevPage,
  currentPage,
  totalPage,
  title,
  width,
  modalNav = false,
  src,
  heartCount,
  modalState = true,
  animation = "opacity",
  date,
}) => {
  const { isMobile } = useMedia();
  const variants = useMemo(() => {
    if (animation === "opacity") {
      return opacityVariants(0.5);
    }
    if (animation === "vertical") {
      return verticalVariants(300, 300);
    }
    return opacityVariants(0.5);
  }, [animation]);

  return (
    <>
      {modalState && (
        <ModalContainer width={width} className={className}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="leaving"
            className="modal-dimmed"
            onClick={onClose}
          ></motion.div>
          <motion.div
            className="modal-container"
            key="modal"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="leaving"
          >
            <div className="modal-header-container">
              <div className="modal-header-left">
                <button onClick={goPrevPage} disabled={currentPage === 1}>
                  <span className="material-symbols-outlined arrow-left">chevron_left</span>
                </button>
                {!isMobile && currentPage && (
                  <div className="modal-page-wrapper">{`${currentPage} / ${totalPage}`}</div>
                )}
                <button onClick={goNextPage} disabled={currentPage === totalPage}>
                  <span className="material-symbols-outlined arrow-right">chevron_right</span>
                </button>
              </div>

              <div className="modal-header-center">
                <span className="modal-title">{title}</span>
                {date && <span className="modal-date">{date}</span>}
              </div>

              <div className="modal-header-right">
                <div className="modal-close-btn" onClick={onClose}>
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            </div>
            <div className="modal-wrapper">{children}</div>

            {modalNav && (
              <ModalSideNav
                downloadLink={src}
                heartCount={heartCount}
                onScaleDown={onScaleDown}
                onScaleUp={onScaleUp}
              />
            )}
          </motion.div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
interface ModalContainerCss {
  width?: number;
}

const ModalContainer = styled.div<ModalContainerCss>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .modal-dimmed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal-wrapper {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    overflow-y: scroll;
  }
  .modal-container {
    height: 100%;
    width: ${(props) => props.width}px;
    position: relative;
    border-radius: 10px;
  }
  .modal-close-btn {
    cursor: pointer;
    ${hoverStyle01}
    span {
      margin-right: 15px;
    }
  }
  .modal-next-btn,
  .modal-prev-btn {
    position: absolute;
    top: 50%;
    color: white;
    background: none;
    span {
      font-size: 50px;
    }
    cursor: pointer;
    :disabled {
      display: none;
    }
    ${hoverStyle01}
  }
  .modal-next-btn {
    right: -10%;
  }
  .modal-prev-btn {
    left: -10%;
  }
  .modal-mobile-prev-btn,
  .modal-mobile-next-btn {
    display: none;
  }
  .modal-header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-bottom: 1.5px solid ${(props) => props.theme.palette.Gray01};
  }
  .modal-title {
    color: ${(props) => props.theme.palette.DarkGray01};
    font-weight: 600;
  }
  .modal-page-wrapper {
    font-size: 14px;
  }
  .modal-header-right,
  .modal-header-left,
  .modal-header-center {
    flex: 1;
  }
  .modal-header-center {
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .modal-date {
    color: ${(props) => props.theme.palette.Gray06};
    font-size: 14px;
  }
  .modal-header-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .modal-header-left {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .arrow-left,
  .arrow-right {
    font-size: 25px;
    line-height: 30px;
    font-weight: 300;
    cursor: pointer;
    ${hoverStyle01}
  }
  .modal-header-zoom-wrapper {
    margin-right: 20px;
    span {
      font-size: 25px;
      margin-top: 3px;
      cursor: pointer;
      :hover {
        ${hoverStyle01}
      }
    }
  }
  /* mobile */
  ${media.lm} {
    .modal-container,
    .modal-wrapper {
      width: 100%;
    }
    .modal-header-zoom-wrapper {
      display: none;
    }
    .modal-mobile-prev-btn,
    .modal-mobile-next-btn {
      display: block;
      span {
        color: ${(props) => props.theme.palette.Gray04};
        :hover {
          ${hoverStyle01}
        }
      }
      :disabled {
        span {
          color: ${(props) => props.theme.palette.Gray01};
        }
        span:hover {
          color: ${(props) => props.theme.palette.Gray01};
        }
      }
    }
    .modal-next-btn,
    .modal-prev-btn,
    .arrow-left,
    .arrow-right {
      display: none;
    }
    .modal-header-right,
    .modal-header-left {
      flex: 1;
    }
    .modal-header-center {
      flex: 5;
    }
  }
`;
