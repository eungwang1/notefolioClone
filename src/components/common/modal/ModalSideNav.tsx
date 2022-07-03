import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { hoverStyle01, hoverStyle04, scalingKeyframes } from "../../../styles/theme";
interface IModalSideNavProps {
  downloadLink?: string;
  heartCount?: number;
}
const ModalSideNav: React.FC<IModalSideNavProps> = ({ downloadLink, heartCount }) => {
  const onToggleHeart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.target as Element;
    if (node.className.includes("heart")) {
      if (node.className.includes("active")) {
        node.className = "material-symbols-outlined heart";
      } else {
        node.className += "-active";
      }
      return;
    }
  };
  return (
    <ModalSideNavContainer>
      <div className="modal-side-nav-heart-container">
        <div className="modal-side-nav-heart-wrapper">
          <span className="material-symbols-outlined heart" onClick={onToggleHeart}>
            favorite
          </span>
        </div>
        <span className="modal-side-nav-heart-count">{heartCount}</span>
      </div>
      <a href={downloadLink} target="_blank" rel="noreferrer">
        <div className="modal-side-nav-download-wrapper">
          <span className="material-symbols-outlined download">download</span>
        </div>
      </a>
    </ModalSideNavContainer>
  );
};

export default ModalSideNav;

const ModalSideNavContainer = styled.div`
  ${scalingKeyframes(1.2)};
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
  .modal-side-nav-download-wrapper {
    border-radius: 50%;
    padding: 11px;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: white;
    cursor: pointer;
  }
  .download {
    ${hoverStyle01}
  }
  .heart-active {
    animation: scaling 0.5s;
    color: red;
  }
`;
