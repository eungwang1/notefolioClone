import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoIcon02, logoIcon03 } from "../../../assets";
import { media } from "../../../styles/theme";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="header-banner">
        <img src="/images/banner.png" alt="banner" width="100%" height="auto" />
      </div>
      <div className="family-gnb">
        <Link to="/" className="gnb-logo">
          <img src={logoIcon02} alt="logo" width="100%" height="auto" />
        </Link>
        <Link to="/" className="gnb-menu">
          <img src={logoIcon03} alt="logo" width="100%" height="auto" />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  .gnb-logo,
  .gnb-menu {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px 16px;
  }
  .gnb-menu {
    background-color: #ffffff;
    border-right: 1px solid #dfdfdf;
    border-left: 1px solid #dfdfdf;
    box-sizing: border-box;
  }
  .header-banner {
    display: flex;
    width: 50%;
    margin: 0 auto;
    ${media.tb} {
      display: none;
    }
  }
  .family-gnb {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    background-color: #f9fafc;
    width: 100%;
    height: 35px;
  }
`;
