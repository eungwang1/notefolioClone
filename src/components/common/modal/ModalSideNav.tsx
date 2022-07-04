import React, { useRef } from "react";
import styled from "styled-components";
import { hoverStyle01, scalingKeyframes } from "../../../styles/theme";
interface IModalSideNavProps {
  downloadLink?: string;
  heartCount?: number;
  onScaleUp?: () => void;
  onScaleDown?: () => void;
}
const ModalSideNav: React.FC<IModalSideNavProps> = ({ downloadLink, heartCount, onScaleDown, onScaleUp }) => {
  const heartCountRef = useRef<HTMLDivElement>(null);
  const onToggleHeart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.target as Element;
    if (node.className.includes("heart")) {
      if (node.className.includes("active")) {
        node.className = "material-symbols-outlined heart not-draggable";
        if (heartCountRef.current) {
          heartCountRef.current.innerText = Number(heartCountRef.current.innerText) - 1 + "";
        }
      } else {
        node.className += " active";
        if (heartCountRef.current) {
          heartCountRef.current.innerText = Number(heartCountRef.current.innerText) + 1 + "";
        }
      }
      return;
    }
  };
  return (
    <ModalSideNavContainer>
      <div className="modal-side-nav-heart-container">
        <div className="modal-side-nav-heart-wrapper">
          <span className="material-symbols-outlined heart not-draggable" onClick={onToggleHeart}>
            favorite
          </span>
        </div>
        <span className="modal-side-nav-heart-count" ref={heartCountRef}>
          {heartCount}
        </span>
      </div>
      <a href={downloadLink} target="_blank" rel="noreferrer">
        <div className="modal-side-nav-download-wrapper">
          <span className="material-symbols-outlined download not-draggable">download</span>
        </div>
      </a>
      <div className="modal-side-nav-zoom-wrapper">
        <span className="material-symbols-outlined zoomin" onClick={onScaleUp}>
          zoom_in
        </span>
      </div>
      <div className="modal-side-nav-zoom-wrapper">
        <span className="material-symbols-outlined zoomout" onClick={onScaleDown}>
          zoom_out
        </span>
      </div>
    </ModalSideNavContainer>
  );
};

export default ModalSideNav;

const ModalSideNavContainer = styled.div`
  position: absolute;
  top: 8%;
  right: -10%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .modal-side-nav-heart-count {
    color: white;
    margin-top: 5px;
    font-weight: 700;
  }

  .modal-side-nav-heart-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-side-nav-heart-wrapper,
  .modal-side-nav-download-wrapper,
  .modal-side-nav-zoom-wrapper {
    border-radius: 50%;
    padding: 11px;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: white;
    cursor: pointer;
  }
  .download,
  .zoomin,
  .zoomout {
    ${hoverStyle01}
  }

  .heart.active {
    animation: ${scalingKeyframes(1.2)} 0.5s;
    color: red;
  }
`;
