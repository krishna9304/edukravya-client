import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(99 102 241)",
    },
    secondary: {
      main: "rgb(96 165 250)",
    },
    info: {
      main: "rgb(192 38 211 )",
    },
    success: {
      main: "rgb(34 197 94)",
    },
    error: {
      main: "#ff0000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
