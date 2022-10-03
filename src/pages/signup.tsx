import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Dispatch, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import validator from "validator";
import server from "../axios";
import Logo from "../components/logo";
import { useDispatch } from "react-redux";
import { setUser, User } from "../redux/slices/user";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { getServerErrors } from "../helpers/servererrors";
import { AnyAction } from "@reduxjs/toolkit";

export interface SignUpData {
  name: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  userId: string | null;
  userType: "student" | "educator";
}

export enum Subjects {
  "CHEMISTRY",
  "PHYSICS",
  "MATHS",
  "BIOLOGY",
}

export interface EducatorData {
  qualification?: string;
  experience?: number;
  subject?: Subjects;
  vision?: string;
}

const getUserErrors: (signUpData: SignUpData) => string[] = (
  signUpData: SignUpData
): string[] => {
  const errs: string[] = [];
  if (signUpData.email != null && !validator.isEmail(signUpData.email + "")) {
    errs.push("Invalid Email");
  }
  if (
    signUpData.phone != null &&
    !validator.isMobilePhone(signUpData.phone + "")
  ) {
    errs.push("Invalid Phone");
  }
  if (signUpData.password != null && signUpData.password.trim().length < 8) {
    errs.push("Invalid Password");
  }
  if (signUpData.userId != null && !signUpData.userId) {
    errs.push("Invalid Username");
  }
  if (signUpData.name != null && !signUpData.name) {
    errs.push("Invalid Name");
  }
  return errs;
};

const getEducatorDataErrors: (educatorData: EducatorData) => string[] = (
  educatorData: EducatorData
): string[] => {
  const errs: string[] = [];
  if (
    educatorData.experience &&
    (educatorData.experience > 100 || educatorData.experience < 0)
  ) {
    errs.push("Invalid Experience");
  }
  return errs;
};

export default function SignUp() {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: null,
    email: null,
    userId: null,
    phone: null,
    password: null,
    userType: "student",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [, setCookie, removeCookie] = useCookies(["jwt"]);

  const verifyUserData: () => boolean = (): boolean => {
    if (
      !getUserErrors(signUpData).length &&
      !Object.values(signUpData).includes(null) &&
      !Object.values(signUpData).includes("")
    ) {
      return true;
    }
    if (getUserErrors(signUpData).length) {
      getUserErrors(signUpData).forEach((err: string): void => {
        toast.error(err);
      });
      return false;
    }
    if (Object.values(signUpData).includes(null)) {
      Object.keys(signUpData).forEach((key: string): void => {
        if (!signUpData[key as keyof SignUpData])
          toast.error(`field \`${key}\` can not be empty`);
      });
      return false;
    }
    return false;
  };

  const handleUerSignUp = () => {
    server
      .post("/api/user/register", {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
        phone: signUpData.phone,
        userId: signUpData.userId,
        userType: signUpData.userType,
      })
      .then(
        ({
          data: { user, token },
        }: AxiosResponse<{ user: User; token: string }>): void => {
          dispatch(setUser(user));
          removeCookie("jwt");
          setCookie("jwt", token);
        }
      )
      .catch((err: AxiosError<any>): void => {
        getServerErrors(err).forEach((err: string): void => {
          toast.error(err);
        });
      });
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
              Sign Up to <br /> continue access
            </span>
          </div>
          <div className="text-sm text-primary-300 font-semibold">
            HAVE A GREAT DAY !!
          </div>
        </div>
        <div className="flex gap-10 flex-col justify-between py-10 px-10 h-full w-full sm:w-1/2 bg-white rounded-xl sm:rounded-l-none">
          <div className="text-4xl font-black cursor-default">Sign Up</div>
          <div className="flex gap-2 flex-col justify-around h-1/2">
            <Input
              error={
                signUpData.name != null && signUpData.name.trim().length < 8
              }
              onChange={(e): void => {
                setSignUpData(
                  (prevData: SignUpData): SignUpData => ({
                    ...prevData,
                    name: e.target.value,
                  })
                );
              }}
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Name"
            />
            <Input
              error={
                signUpData.userId != null && signUpData.userId.trim().length < 8
              }
              onChange={(e): void => {
                setSignUpData(
                  (prevData: SignUpData): SignUpData => ({
                    ...prevData,
                    userId: e.target.value,
                  })
                );
              }}
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Username"
            />
            <Input
              error={
                signUpData.email != null &&
                !validator.isEmail(signUpData.email + "")
              }
              onChange={(e) => {
                setSignUpData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
              type="email"
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Email Address"
            />
            <Input
              error={
                signUpData.phone != null &&
                !validator.isMobilePhone(signUpData.phone + "")
              }
              onChange={(e): void => {
                setSignUpData(
                  (prevData: SignUpData): SignUpData => ({
                    ...prevData,
                    phone: e.target.value,
                  })
                );
              }}
              type="tel"
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Phone"
            />
            <Input
              onChange={(e): void => {
                setSignUpData(
                  (prevData: SignUpData): SignUpData => ({
                    ...prevData,
                    password: e.target.value,
                  })
                );
              }}
              error={
                signUpData.password != null &&
                signUpData.password.trim().length < 8
              }
              size="small"
              type={isVisible ? "text" : "password"}
              className="px-2 py-2.5 text-gray-500 bg-white w-full rounded-sm "
              placeholder="Create Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(): void => {
                      setIsVisible((pv: boolean): boolean => !pv);
                    }}
                    edge="end"
                  >
                    {isVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <FormControl>
              <FormLabel
                sx={{
                  fontSize: 14,
                }}
              >
                User Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="user-radio-buttons-group-label"
                defaultValue="student"
                name="user-type"
                row
                onChange={(e): void => {
                  setSignUpData(
                    (pd: SignUpData): SignUpData => ({
                      ...pd,
                      userType:
                        e.target.value == "student" ? "student" : "educator",
                    })
                  );
                }}
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="educator"
                  control={<Radio />}
                  label="Educator"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button
                onClick={handleUerSignUp}
                color="success"
                variant="contained"
                className="w-full"
              >
                <div className="text-white">SIGN UP </div>
              </Button>
            </div>
            <div className="text-sm text-right select-none">
              already have an account?
              <Link to="/signin" className="pl-1 font-bold cursor-pointer">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
