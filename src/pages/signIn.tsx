import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { Dispatch, useState } from "react";
import { Link } from "react-router-dom";
import server from "../axios";
import Logo from "../components/logo";
import { setUser, User } from "../redux/slices/user";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { getServerErrors } from "../helpers/servererrors";
import { AnyAction } from "@reduxjs/toolkit";

interface SignInData {
  userId: string | null;
  password: string | null;
}

const getErrors: (signInData: SignInData) => string[] = (
  signInData: SignInData
): string[] => {
  const errs: string[] = [];
  if (signInData.password != null && signInData.password.trim().length < 8) {
    errs.push("Invalid Password");
  }
  return errs;
};

export default function SignIn() {
  const [signInData, setSignInData] = useState<SignInData>({
    userId: null,
    password: null,
  });

  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [, setCookie] = useCookies(["jwt"]);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSignIn: () => void = (): void => {
    if (
      !getErrors(signInData).length &&
      !Object.values(signInData).includes(null) &&
      !Object.values(signInData).includes("")
    ) {
      server
        .post("/api/user/login", {
          userId: signInData.userId,
          password: signInData.password,
        })
        .then(
          ({
            data: { user, token },
          }: AxiosResponse<{ user: User; token: string }>) => {
            dispatch(setUser(user));
            setCookie("jwt", token);
          }
        )
        .catch((err: AxiosError<any>): void =>
          getServerErrors(err).forEach((err: string) => toast.error(err))
        );
    }
    if (getErrors(signInData).length) {
      getErrors(signInData).forEach((err: string) => toast.error(err));
    }
    if (Object.values(signInData).includes(null)) {
      Object.keys(signInData).forEach((key: string): void => {
        if (!signInData[key as keyof SignInData])
          toast.error(`field \`${key}\` can not be empty`);
      });
    }
  };

  return (
    <div className="flex py-20 justify-center flex-col h-screen w-full items-center bg-indigo-400 bg-gradient-to-b from-purple-700 to-blue-600">
      <div className="flex px-10 items-center justify-center h-full max-h-fit w-full max-w-4xl min-w-4xl rounded-xl">
        <div className="sm:flex hidden bg-[url(/images/signbg.webp)] bg-no-repeat bg-cover flex-col justify-between h-full w-1/2 py-10 px-4 bg-primary-800 rounded-l-xl select-none">
          <div className="font-black w-52 text-white md:text-4xl text-3xl">
            <Logo />
          </div>
          <div className="flex flex-col gap-4 px-10 items-end text-white">
            <span className="font-bold md:text-4xl text-3xl">WELCOME PAGE</span>
            <span className="text-lg font-semibold  pr-8">
              Sign In to <br /> continue access
            </span>
          </div>
          <div className="text-sm text-primary-300 font-semibold">
            HAVE A GREAT DAY !!
          </div>
        </div>
        <div className="flex gap-10 flex-col justify-between py-10 px-10 h-full w-full sm:w-1/2 bg-white rounded-xl sm:rounded-l-none">
          <div className="text-4xl font-black cursor-default">Sign In</div>
          <div className="flex flex-col h-1/2">
            <Input
              onChange={(e) => {
                setSignInData((prevData: SignInData) => ({
                  ...prevData,
                  userId: e.target.value,
                }));
              }}
              size="small"
              className="p-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Username"
            />
            <Input
              onChange={(e) => {
                setSignInData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
              size="small"
              type={isVisible ? "text" : "password"}
              className="px-2 py-2.5 text-gray-500 bg-white w-full rounded-sm "
              placeholder="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setIsVisible((iv) => !iv);
                    }}
                    edge="end"
                  >
                    {isVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button
                onClick={handleSignIn}
                color="success"
                variant="contained"
                className="w-full"
              >
                <div className="text-white">Sign In</div>
              </Button>
            </div>
            <div className="text-sm text-right select-none">
              don't have an account?
              <Link to="/signup" className="pl-1 font-bold cursor-pointer">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
