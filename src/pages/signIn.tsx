import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import Logo from "../components/logo";
import {useSelector} from "react-redux"
import {RootState} from "../redux/store";
import {User} from "../redux/slices/user";

interface Data {
  emailOrUsername: string | null;
  password: string | null;
}

export default function SignUp() {
  const [data, setData] = useState<Data>({
    emailOrUsername: null,
    password: null,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="flex py-20 justify-center flex-col h-screen w-full items-center bg-indigo-400 bg-gradient-to-b from-primary-700 to-secondary-400">
      <div className="flex px-10 items-center justify-center h-[100%] max-h-fit w-full max-w-4xl min-w-4xl rounded-xl">
        <div
          className="sm:flex hidden bg-[url(/images/signblue.jpg)] bg-no-repeat bg-cover flex-col justify-between h-full w-1/2 py-10 px-4 bg-primary-800 rounded-l-xl select-none"
        >
          <div className="font-black text-white md:text-4xl text-3xl">
            <Logo />
          </div>
          <div className="flex flex-col px-10 items-end text-white">
            <span className="font-bold md:text-4xl text-3xl">WELCOME PAGE</span>
            <span className="text-lg font-semibold pt-4 pr-8">
              Sign In to <br /> continue access
            </span>
          </div>
          <div className="text-sm text-primary-300 font-semibold">
            HAVE A GREAT DAY !!
          </div>
        </div>
        <div className="flex gap-10 flex-col justify-center px-10 h-full w-full sm:w-1/2 bg-white rounded-xl sm:rounded-l-none">
          <div className="text-4xl font-black cursor-default">Sign In</div>
          <div className="flex flex-col justify-around h-1/3">
            <Input
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  emailOrUsername: e.target.value,
                }));
              }}
              size="small"
              className="p-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Email Address or Username"
            />
            <Input
              onChange={(e) => {
                setData((prevData) => ({
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
                onClick={() => {
                  console.log(data);
                }}
                color="success"
                variant="contained"
                className="w-full"
              >
                <div className="text-white">Sign In</div>
              </Button>
            </div>
            <div className="flex items-center cursor-default">
              <hr className="w-full" />
              <div className="p-2 text-lg">or</div>
              <hr className="w-full" />
            </div>
            <Button color="info" variant="contained" className="w-full">
              <div className="text-white">Continue With Google</div>
            </Button>
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
