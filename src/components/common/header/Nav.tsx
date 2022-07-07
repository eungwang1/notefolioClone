import React, { useMemo } from "react";
import styled from "styled-components";
import { LogoIcon } from "../../../assets";
import routes from "../../../lib/routes";
import SearchInput from "./Search";
import { media } from "../../../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useAppSelector } from "@store/hook";
import Image from "next/image";
interface NavProps {
  searchInput?: boolean;
}
const Nav: React.FC<NavProps> = ({ searchInput = true }) => {
  const me = useAppSelector((state) => state.notefolioSlice.me);
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
  const swiper = useMemo(() => {
    return <motion.span layoutId="nav-item" className="nav-left-menu-item-swiper"></motion.span>;
  }, []);
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
              <span className={`nav-left-menu-item ${item.isActive}`}>
                {item.name}
                {item.isActive && swiper}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-center-container">{searchInput && <SearchInput />}</div>
      <div className="nav-right-container">
        {me ? (
          <div className="nav-user-profile-wrapper">
            <div>
              <Image
                src={me.profileImg}
                width={25}
                height={25}
                layout="intrinsic"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div>
              <span className="nav-user-profile-username">{me.username}</span>
              <span className="nav-user-profile-greeting"> 님 안녕하세요.</span>
            </div>
          </div>
        ) : (
          <div className="nav-auth-btn-group">
            <span className="nav-auth-btn-login">로그인</span>
            <span className="nav-auth-btn-register">회원가입</span>
          </div>
        )}
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
    cursor: pointer;
  }
  .nav-left-menu-container {
    display: flex;
    align-items: center;
    ${media.tb} {
      display: none;
    }
  }
  .nav-user-profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
  }
  .nav-user-profile-username {
    font-weight: 800;
  }
  .nav-user-profile-greeting {
    font-size: 14px;
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
    position: relative;
  }
  .nav-left-menu-item-swiper {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme.palette.DarkGray01};
    bottom: -19px;
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
