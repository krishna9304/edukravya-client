import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/system";
import MuiTheme from "./mui-theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <ThemeProvider theme={MuiTheme}>
          <App />
        </ThemeProvider>
        <ToastContainer theme="dark" position="bottom-right" />
      </CookiesProvider>
    </Provider>
  </StrictMode>
);
