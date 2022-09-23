import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/system";
import MuiTheme from "./mui-theme";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
