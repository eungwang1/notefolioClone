import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../../../assets";
import routes from "../../../lib/routes";
import SearchInput from "./Search";
import { media } from "../../../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
interface NavProps {
  searchInput?: boolean;
}
const Nav: React.FC<NavProps> = ({ searchInput = true }) => {
  const router = useRouter();
  const navItem = [
    {
      name: "발견",
      to: routes.HOME,
      isActive: routes.HOME === router.pathname ? "active" : "",
    },
    {
      name: "채용",
      to: routes.JOB,
      isActive: routes.JOB === router.pathname ? "active" : "",
    },
  ];
  return (
    <NavContainer>
      <div className="nav-left-container">
        <Link href={routes.HOME}>
          <span className="nav-left-logo">
            <LogoIcon />
          </span>
        </Link>
        <div className="nav-left-menu-container">
          {navItem.map((item, idx) => (
            <Link href={item.to} key={idx}>
              <span className={`nav-left-menu-item ${item.isActive}`}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-center-container">{searchInput && <SearchInput />}</div>
      <div className="nav-right-container">
        <div className="nav-auth-btn-group">
          <Link href={routes.HOME}>
            <span className="nav-auth-btn-login">로그인</span>
          </Link>
          <Link href={routes.HOME}>
            <span className="nav-auth-btn-register">회원가입</span>
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  z-index: 999;
  background-color: ${(props) => props.theme.palette.White};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.Gray01};
  .nav-left-logo {
    margin-left: 10px;
    margin-right: 24px;
  }
  .nav-left-menu-container {
    display: flex;
    align-items: center;
    ${media.tb} {
      display: none;
    }
  }
  .nav-left-menu-item {
    display: flex;
    margin: 0 14px;
    align-items: center;
    color: ${(props) => props.theme.palette.DarkGray01};
    letter-spacing: -0.4px;
    position: relative;
    transition: 0.1s all;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
  }
  .active {
    ::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${(props) => props.theme.palette.DarkGray01};
      bottom: -19px;
    }
    ::selection {
      background: #31bfc2;
      color: ${(props) => props.theme.palette.White};
      text-shadow: none;
    }
  }

  .nav-left-container {
    display: flex;
    align-items: center;
    height: 56px;
    width: 37%;
  }
  .nav-center-container {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 280px;
    ${media.tb} {
      display: none;
    }
  }
  .nav-right-container {
    display: flex;
    align-items: center;
    height: 56px;
    width: 42%;
    justify-content: flex-end;
    position: relative;
    ${media.tb} {
      display: none;
    }
  }
  .nav-auth-btn-group {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.palette.DarkGray01};
    font-weight: 400;
  }
  .nav-auth-btn-login {
    margin: 0px 7px;
    transition: 0.1s all;
    font-size: 13px;
    line-height: 16px;
    cursor: pointer;
  }
  .nav-auth-btn-register {
    height: 38px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.DarkGray01};
    border-radius: 19px;
    color: ${(props) => props.theme.palette.White};
    letter-spacing: -0.4px;
    font-weight: 700;
    cursor: pointer;
  }
`;
