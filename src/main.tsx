import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/system";
import MuiTheme from "./mui-theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <App />
      </ThemeProvider>
      <ToastContainer theme="dark" position="bottom-right" />
    </Provider>
  </React.StrictMode>
);
