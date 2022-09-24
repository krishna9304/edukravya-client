import React from "react";
import { Link } from "react-router-dom";
import edukravyaImage from "../assets/edukravya-grid-cyan-final.png";

function Logo({
  className = "",
  size = "3xl",
  color = "white",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  imgSize?: string;
  fontSize?: string;
  color?: string;
}) {
  return (
    <Link to="/dashboard/home" className="-translate-y-1 select-none">
      <div
        className={`${
          size == "sm"
            ? "text-sm"
            : size == "md"
            ? "text-md"
            : size == "lg"
            ? "text-lg"
            : size == "xl"
            ? "text-xl"
            : size == "2xl"
            ? "text-2xl"
            : size == "3xl"
            ? "text-3xl"
            : size == "4xl"
            ? "text-4xl"
            : size == "5xl"
            ? "text-5xl"
            : size == "6xl"
            ? "text-6xl"
            : size == "7xl"
            ? "text-7xl"
            : size == "8xl"
            ? "text-8xl"
            : size == "9xl"
            ? "text-9xl"
            : ""
        } items-baseline text-${color} font-bold flex gap-[1px] ${className}`}
      >
        <span>EDU</span>
        {size == "sm"}
        <img
          className={`${
            size == "sm"
              ? "w-3.5"
              : size == "md"
              ? "w-[0.9rem]"
              : size == "lg"
              ? "w-4"
              : size == "xl"
              ? "w-4"
              : size == "2xl"
              ? "w-5"
              : size == "3xl"
              ? "w-6"
              : size == "4xl"
              ? "w-7"
              : size == "5xl"
              ? "w-9"
              : size == "6xl"
              ? "w-10"
              : size == "7xl"
              ? "w-12"
              : size == "8xl"
              ? "w-[4.25rem]"
              : size == "9xl"
              ? "w-24"
              : ""
          }`}
          src={edukravyaImage}
          alt="Edukravya logo"
        />
        <span>RAVYA</span>
      </div>
    </Link>
  );
}

export default Logo;
