import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";

const FooterMobile = () => {
  return (
    <FooterMobileContainer>
      <div className="footer-mobile-wrapper">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">account_circle</span>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </FooterMobileContainer>
  );
};

export default FooterMobile;

const FooterMobileContainer = styled.footer`
  display: none;
  background-color: ${(props) => props.theme.palette.White};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  border-top: 1px solid #e5e5e5;
  z-index: 999;
  .footer-mobile-wrapper {
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    span {
      font-size: 30px;
      cursor: pointer;
    }
  }
  ${media.tb} {
    display: block;
  }
`;
