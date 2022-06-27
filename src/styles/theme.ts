import { DefaultTheme } from "styled-components";
const palette = {
  DarkGray01: "#2c3030",
  White: "#ffffff",
  Gray01: "#e4e8e8",
  Gray02: "#c4c4c4",
  Gray03: "#F9F9F9",
  Gray04: "#666565",
  Pink01: "#FFAFB0",
  Orange01: "#FFC282",
  Yellow01: "#c4c4c4",
  Green01: "#D3FC8D",
  Green02: "#47E774",
  Blue01: "#B5C7ED",
  Blue02: "#AEE4FF",
  Blue03: "#4982fc",
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

export default theme;
