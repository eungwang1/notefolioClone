import { css, DefaultTheme, keyframes } from "styled-components";
const palette = {
  Black01: "#161c1c",
  DarkGray01: "#2c3030",
  White: "#ffffff",
  Gray01: "#e4e8e8",
  Gray02: "#4E5454",
  Gray03: "#F9F9F9",
  Gray04: "#666565",
  Gray05: "#f7f9f9",
  Pink01: "#FFAFB0",
  Orange01: "#FFC282",
  Yellow01: "#c4c4c4",
  Green01: "#D3FC8D",
  Green02: "#47E774",
  Blue01: "#B5C7ED",
  Blue02: "#AEE4FF",
  Blue03: "#4982fc",
  SkyBlue01: "#e8f9fa",
  SkyBlue02: "#edfbfb",
  Mint01: "#1bcad3",
};

const theme: DefaultTheme = {
  palette,
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  tb: customMediaQuery(1024),
  lm: customMediaQuery(768),
  sm: customMediaQuery(480),
};

export const hoverStyle01 = css`
  transition: all 0.3s ease-out;
  :hover {
    color: ${(props) => props.theme.palette.Mint01};
    border-color: ${(props) => props.theme.palette.Mint01};
  }
`;
export const hoverStyle02 = css`
  transition: all 0.3s ease-out;
  :hover {
    color: ${(props) => props.theme.palette.Mint01};
  }
`;
export const hoverStyle03 = css`
  transition: all 0.3s ease-out;
  :hover {
    border-color: ${(props) => props.theme.palette.Mint01};
  }
`;

export const hoverStyle04 = css`
  transition: all 0.3s ease-out;
  :hover {
    color: red;
  }
`;

export const scalingKeyframes = (sacale: number) => {
  return keyframes`
     0% {
      transform: scale(1);
    }
    50% {
      transform: scale(scale);
    }
    0% {
      transform: scale(1);
    }
  `;
};

export default theme;
