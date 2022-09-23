import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.svg";
import Logo from "./logo";

export default function PageNotFound() {
  return (
    <div>
      <div className="bg-primary-600 p-3">
        <Logo />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center pt-60">
        <img className={`w-80`} src={pagenotfound} alt="404 message" />
        <div className="text-4xl font-bold">PAGE NOT FOUND</div>
        <Link to="/dashboard/home">
          <Button
            color="secondary"
            sx={{
              fontWeight: 600,
            }}
            variant="contained"
          >
            Go Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
