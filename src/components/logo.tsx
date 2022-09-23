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
    <Link to="/dashboard/home" className="-translate-y-1">
      <div
        className={`text-${fontSize} items-baseline text-${color} font-bold flex gap-[1px] ${className}`}
      >
        <span>EDU</span>
        <img className={`w-6`} src={edukravyaImage} alt="Edukravya logo" />
        <span>RAVYA</span>
      </div>
    </Link>
  );
}

export default Logo;
