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
import { AnyAction } from "@reduxjs/toolkit";
import LoaderPage from "./pages/loaderpage";
import Documents from "./pages/documents";
import AuthProtectedPage from "./components/authprotectedpage";
import Profile from "./pages/profile";
import { connect, io, Socket } from "socket.io-client";
import { serverURL } from "./constants";
import LiveLecture from "./pages/livelecture";
import Batchpage from "./pages/batchpage";
import socket from "./utils/socket";

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
        .then(
          ({
            data: { user, token },
          }: AxiosResponse<{ user: User; token: string }>): void => {
            dispatch(setUser(user));
            //
            setIsLoading(false);
          }
        )
        .catch((err: Error): void => {
          console.error(err);
          setIsLoading(false);
          removeCookie("jwt");
        });
    } else {
      setIsLoading(false);
    }
    return (): void => {};
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Allowed to unauthenticated users only */}
        <Route
          path="/signup"
          element={
            isLoading ? (
              <LoaderPage />
            ) : user.userId ? (
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
            ) : user.userId ? (
              <NavigateTo path="/dashboard/home" />
            ) : (
              <SignIn />
            )
          }
        />
        {/* allowed authenticated users */}
        <Route
          path="/live/:lectureId"
          element={
            <AuthProtectedPage isLoading={isLoading}>
              <LiveLecture />
            </AuthProtectedPage>
          }
        />
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
        <Route path="/" element={<Landingpage />} />
        <Route path="/batch/:batchId" element={<Batchpage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
