import { createTheme, Theme } from "@mui/material";

const MuiTheme: Theme = createTheme({
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

export default MuiTheme;
