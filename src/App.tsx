import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signup";
import SignIn from "./pages/signIn";
import PageNotFound from "./components/pagenotfound";
import Landingpage from "./pages/landingpage";
import { Dispatch, useEffect, useState } from "react";
import server from "./axios";
import { useCookies } from "react-cookie";
import { setUser, User } from "./redux/slices/user";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import NavigateTo from "./components/navigateto";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { getServerErrors } from "./helpers/servererrors";
import { toast } from "react-toastify";
import { AnyAction } from "@reduxjs/toolkit";
import LoaderPage from "./pages/loaderpage";
import Profile from "./pages/profile";
import Documents from "./pages/documents";
import AuthProtectedPage from "./components/authprotectedpage";

function App() {
  const [{ jwt }, setCookie, removeCookie] = useCookies<
    "jwt",
    {
      jwt: string;
    }
  >(["jwt"]);

  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): (() => void) => {
    if (jwt) {
      server.defaults.headers.common["x-access-token"] = jwt;
      server
        .get("/api/user/self")
        .then(({ data: userData }: AxiosResponse<User>): void => {
          dispatch(setUser(userData));
          // setCookie("jwt",userData.token);
          setIsLoading(false);
        })
        .catch((): void => {
          removeCookie("jwt");
          setIsLoading(false);
        });
    }
    return () => {};
  }, [jwt]);

  return (
    <BrowserRouter>
      <Routes>
        {/* NOT Allowed to authenticated users */}
        <Route
          path="/signup"
          element={
            isLoading ? (
              <LoaderPage />
            ) : user._id ? (
              <NavigateTo path="/dashboard/home" />
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/signIn"
          element={
            isLoading ? (
              <LoaderPage />
            ) : user._id ? (
              <NavigateTo path="/dashboard/home" />
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path="/"
          element={
            <AuthProtectedPage isLoading={isLoading}>
              <Landingpage />
            </AuthProtectedPage>
          }
        />
        {/* not allowed for unauthenticated users */}
        <Route
          path="/user/:id"
          element={
            <AuthProtectedPage isLoading={isLoading}>
              <Profile />
            </AuthProtectedPage>
          }
        />
        <Route
          path="/batches/documents"
          element={
            <AuthProtectedPage isLoading={isLoading}>
              <Documents />
            </AuthProtectedPage>
          }
        />
        <Route
          path="/dashboard/:tab"
          element={
            <AuthProtectedPage isLoading={isLoading}>
              <Dashboard />
            </AuthProtectedPage>
          }
        />
        {/* allowed to all */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
