import { createTheme, Theme } from "@mui/material";

const MuiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#4338ca",
      "100": "#e0e7ff",
      "200": "#c7d2fe",
      "300": "#a5b4fc",
      "400": "#818cf8",
      "500": "#6366f1",
      "600": "#4f46e5",
      "700": "#4338ca",
      "800": "#3730a3",
      "900": "#312e81",
      "50": "#eef2ff",
      A100: "#e0e7ff",
      A200: "#c7d2fe",
      A400: "#818cf8",
      A700: "#4338ca",
    },
    secondary: {
      main: "#0ea5e9",
      "50": "#f0f9ff",
      "100": "#e0f2fe",
      "200": "#bae6fd",
      "300": "#7dd3fc",
      "400": "#38bdf8",
      "500": "#0ea5e9",
      "600": "#0284c7",
      "700": "#0369a1",
      "800": "#075985",
      "900": "#0c4a6e",
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

export default MuiTheme;
