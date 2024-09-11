import { createTheme, type Shadows } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#e0e0e0",
    },
    primary: {
      main: "#bb86fc",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  shadows: Array(25)
    .fill("none")
    .map((_, index) =>
      index === 0 ? "none" : `0px ${index * 2}px ${index * 4}px rgba(0,0,0,0.2)`
    ) as Shadows,
});
