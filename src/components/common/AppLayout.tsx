import React from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

export default AppLayout;

const AppLayoutContainer = styled.div`
  width: 100vw;
`;
