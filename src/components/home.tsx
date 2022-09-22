import React from "react";
import Carousel from "./carousel";
import CarouselCard from "./carouselcard";

function Home() {
  return (
    <div className="">
      <div className="flex flex-col grow">
        <div className="overflow-auto w-screen justify-center items-center">
          <Carousel />
        </div>
        home
      </div>
    </div>
  );
}

export default Home;
