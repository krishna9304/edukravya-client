import React from "react";
import { Link } from "react-router-dom";
import edukravyaImage from "../assets/edukravya-grid-cyan-final.png";

function Logo({
  className = "",
  imgSize = "7",
  fontSize = "3xl",
  color = "white",
}: {
  className?: string;
  imgSize?: string;
  fontSize?: string;
  color?: string;
}) {
  return (
    <Link
      to="/"
      className={`text-${fontSize} text-${color} font-bold flex gap-[1px] ${className}`}
    >
      <span>EDU</span>
      <img
        className={`-translate-y-2 w-${imgSize}`}
        src={edukravyaImage}
        alt="Edukravya logo"
      />
      <span>RAVYA</span>
    </Link>
  );
}

export default Logo;
