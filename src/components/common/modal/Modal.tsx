import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { opacityVariants } from "../../../lib/motionVariants";
import { hoverStyle01, media } from "../../../styles/theme";
interface ModalProps {
  children?: React.ReactNode;
  modalState?: boolean;
  totalPage?: number;
  currentPage?: number;
  width?: number;
  title?: string;
  onClose?: () => void;
  goNextPage?: () => void;
  onScaleUp?: () => void;
  onScaleDown?: () => void;
  goPrevPage?: () => void;
}
const Modal: React.FC<ModalProps> = ({
  children,
  modalState = false,
  onScaleUp,
  onScaleDown,
  onClose,
  goNextPage,
  goPrevPage,
  currentPage,
  totalPage,
  title,
  width,
}) => {
  return (
    <ModalContainer width={width}>
      <div className="modal-dimmed" onClick={onClose}></div>
      <motion.div
        className="modal-container"
        key="modal"
        variants={opacityVariants(0.5)}
        initial="initial"
        animate="animate"
        exit="leaving"
      >
        <div className="modal-header-container">
          <div className="modal-header-left">
            <div className="modal-page-wrapper">{`${currentPage} / ${totalPage}`}</div>
          </div>

          <div className="modal-header-center">
            <span className="modal-title">{title}</span>
          </div>

          <div className="modal-header-right">
            <div className="modal-header-zoom-wrapper">
              <span className="material-symbols-outlined zoomin" onClick={onScaleUp}>
                zoom_in
              </span>
              <span className="material-symbols-outlined zoomout" onClick={onScaleDown}>
                zoom_out
              </span>
            </div>
            <div className="modal-close-btn" onClick={onClose}>
              <span className="material-symbols-outlined">cancel</span>
            </div>
          </div>
        </div>
        <div className="modal-wrapper">{children}</div>
        <button className="modal-next-btn" onClick={goNextPage} disabled={currentPage === totalPage}>
          <span className="material-symbols-outlined">arrow_circle_right</span>
        </button>
        <button className="modal-prev-btn" onClick={goPrevPage} disabled={currentPage === 1}>
          <span className="material-symbols-outlined">arrow_circle_left</span>
        </button>
      </motion.div>
    </ModalContainer>
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
    background: rgba(0, 0, 0, 0.6);
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
  }
  .modal-header-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
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
  }
`;
