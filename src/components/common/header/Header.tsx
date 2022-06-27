import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div``;
