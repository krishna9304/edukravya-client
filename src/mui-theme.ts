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

export default MuiTheme;
