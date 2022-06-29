import React from "react";
import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
const LoadingSpinner: React.FC = () => {
  return (
    <LoadingSpinnerContainer>
      <SpinnerCircular />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
