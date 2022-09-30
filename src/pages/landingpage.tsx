import React from "react";
import Logo from "../components/logo";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import landlogo from "../assets/landlogo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../redux/slices/user";

export default function Landingpage() {
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );

  return (
    <div className="flex min-w-full min-h-full bg-secondary-100">
      <div className="md:w-2/5 w-full min-h-screen bg-[url(/images/signbg.jpg) bg-primary-700 bg-no-repeat bg-cover">
        <div className="px-12 py-6">
          <Logo size="4xl" />
        </div>
      </div>
      <div className="hidden md:w-3/5 min-h-screen bg-seconodary-100" />
      <div className="flex px-4 justify-around items-center w-full min-h-screen fixed top-0 left-0 sm:px-[10vw]">
        <div className="m-2 flex flex-col justify-between bg-white w-fit max-w-3xl rounded-sm aspect-video py-16 px-10">
          <div>
            <span className="font-black text-4xl md:text-6xl text-black">
              E-LEARNING
            </span>
            <br />
            <span className="font-semibold text-2xl md:text-4xl text-black">
              AT HOME
            </span>
            <br />
            <div className="py-8 font-medium text-xl max-w-3xl">
              EDUKRAVYA IS A LEARNIG PLATFORM FOR TODAY'S MODERN STUDENTS.
              <br />
              EXPLORE MORE ABOUT EDUKRAVYA BY SIGNING IN.
            </div>
          </div>
          {user.userId ? (
            <Link to="/dashboard/home">
              <Button variant="contained">Dashboard</Button>
            </Link>
          ) : (
            <div className={`flex gap-4`}>
              <Link to="/signup">
                <Button variant="contained">SIGN UP</Button>
              </Link>
              <Link to="/signin">
                <Button color="primary" variant="outlined">
                  SIGN IN
                </Button>
              </Link>
              <Link to="/dev">
                <Button color="primary" variant="outlined">
                  See the work
                </Button>
              </Link>
            </div>
          )}
          <img
            src={landlogo}
            className="max-w-xs hidden lg:block"
            alt="theme image"
          />
        </div>
      </div>
    </div>
  );
}
