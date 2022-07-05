import React from "react";
import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
interface LoadingSpinnerProps {
  height?: string;
  position?: "flex-start" | "center" | "flex-end";
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ ...props }) => {
  return (
    <LoadingSpinnerContainer {...props}>
      <SpinnerCircular />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
const LoadingSpinnerContainer = styled.div<LoadingSpinnerProps>`
  width: 100%;
  height: ${(props) => props.height || "200px"};
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.position || "center"};
`;
