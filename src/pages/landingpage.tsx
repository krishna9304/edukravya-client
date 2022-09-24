import React from "react";
import Logo from "../components/logo";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import landlogo from "../assets/landlogo.svg";

export default function Landingpage() {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="w-2/5 min-h-screen bg-[url(/images/landingbg.webp)] bg-no-repeat bg-cover">
        <div className="px-12 py-6 ">
          <Logo size="4xl" color="black" />
        </div>
      </div>
      <div className="w-3/5 min-h-screen bg-white">
        <div className="lg:flex flex-col justify-center items-end min-h-screen hidden max-w-screen transform px-60">
          <img src={landlogo} width="300" alt="theme image" />
        </div>
      </div>
      <div className="flex items-center w-full min-h-screen fixed top-0 left-0 sm:px-[20vw]">
        <div className="m-2 flex flex-col justify-between bg-gray-200 w-full max-w-3xl rounded-sm aspect-video py-16 px-10">
          <div>
            <span className="font-black text-6xl text-black">E-LEARNING</span>
            <br />
            <span className="font-semibold text-4xl text-black">AT HOME</span>
            <br />
            <div className="py-8 font-medium text-base">
              EDUKRAVYA IS A LEARNIG PLATFORM FOR TODAY'S MODERN STUDENTS.
              <br />
              EXPLORE MORE ABOUT EDUKRAVYA BY SIGNING IN.
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/signup">
              <Button variant="contained">SIGN UP</Button>
            </Link>
            <Link to="/signin">
              <Button color="secondary" variant="contained">
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
