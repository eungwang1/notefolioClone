import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { hoverStyle02, media } from "@styles/theme";

const FooterPc: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footer-pc-wrapper">
        <div className="footer-pc-top-container">
          <div className="footer-pc-top-info">
            <div className="footer-pc-company-info">
              <span className="footer-pc-company-name">(주)심은광</span>
              <div className="footer-pc-company-more-btn">사업자 정보</div>
            </div>
            <div className="footer-pc-site-map">
              <Link href="/">서비스소개</Link>
              <Link href="/">공지사항</Link>
              <Link href="/">운영정책</Link>
              <Link href="/">개인정보처리방침</Link>
              <Link href="/">자주묻는질문</Link>
              <Link href="/">문의하기</Link>
            </div>
          </div>
          <div className="footer-pc-top-sns"></div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterPc;

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.palette.White};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  color: #2c3030;
  text-align: center;
  border-top: 1px solid #e5e5e5;
  .footer-pc-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
    font-size: 14px;
  }
  .footer-pc-top-container {
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    justify-content: space-between;
  }
  .footer-pc-top-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .footer-pc-company-info {
    display: flex;
    align-items: center;
  }
  .footer-pc-company-name {
    font-size: 11px;
    font-weight: 700;
    margin-right: 4px;
    line-height: 13px;
  }
  .footer-pc-company-more-btn {
    font-size: 11px;
    display: flex;
    align-items: center;
    padding-right: 16px;
    border-right: solid 1px #e1e1e1;
    cursor: pointer;
    margin-right: 10px;
    font-weight: 400;
    line-height: 13px;
    ::after {
      content: "";
      display: inline-block;
      position: relative;
      left: 3px;
      border-left: 3px solid transparent;
      border-top: 3px solid #444444;
      border-right: 3px solid transparent;
      height: 0;
      width: 0;
      transition: 0.2s all;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .footer-pc-site-map {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 11px;
    line-height: 13px;
    a {
      ${hoverStyle02}
    }
  }
  ${media.tb} {
    display: none;
  }
`;
