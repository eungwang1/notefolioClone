import React from "react";
import styled from "styled-components";
import { hoverStyle01, hoverStyle04 } from "../../../styles/theme";
interface IModalSideNavProps {
  downloadLink?: string;
}
const ModalSideNav: React.FC<IModalSideNavProps> = ({ downloadLink }) => {
  return (
    <ModalSideNavContainer>
      <span className="material-symbols-outlined heart">favorite</span>
      <a href={downloadLink} target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined download">download</span>
      </a>
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
  span {
    cursor: pointer;
    background-color: white;
    padding: 13px;
    font-weight: 800;
    border-radius: 50%50%;
    font-size: 20px;
  }
  .heart {
    ${hoverStyle04}
  }
  .download {
    ${hoverStyle01}
  }
`;
