import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    backgrounds: {
      bg: "#252626",
      bgHeader: "#000000",
      bgCard: "rgba(0,0,0, 0.36)",
      fg: "#FFFFFF",
      success: "#00AC5C",
      error: "#EB3323",
      primary: "#00C6BE",
      tooltip: '#E9F5FE',
    },
    gradient: {
      first: "#00D9E5",
      second: "#02C7B1",
    },
    typography: {
      title: "#ffffff",
      desc: "#CBCBCB",
      descDarker: "#717171"
    },
  },
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    textSize: {
      small: "11px",
      medium: "14px",
      large: "18px",
    },
  },
  border: {
    radius: "5px",
    color: "#707070",
    color2: "#00D8E2"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
