import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the mode to dark
  },
});

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
