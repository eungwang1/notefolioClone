import React from "react";
import styled from "styled-components";
import FooterMobile from "./footer/FooterMobile";
import FooterPc from "./footer/FooterPc";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppLayoutContainer>
      {children}
      <FooterPc />
      <FooterMobile />
    </AppLayoutContainer>
  );
};

export default AppLayout;

const AppLayoutContainer = styled.div`
  width: 100vw;
`;
