import React, { ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

interface ThemeProps {
  children: ReactNode;
}

const theme: DefaultTheme = {
  colors: {
    background: "0 0% 100%",
    foreground: "222.2 47.4% 11.2%",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
