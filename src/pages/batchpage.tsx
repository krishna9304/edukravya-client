import { Avatar } from "@mui/material";
import React from "react";
import Page from "../components/page";
import VideoCard from "../components/videocard";
export default function Batchpage() {
  return (
    <div>
      <Page>
        <div className="text-2xl font-bold px-8 pt-6 pb-3 flex justify-between">
          BATCH NAME
        </div>
        <div className="px-10 py-3">
          <div className="text-xl font-semibold pb-2">Teacher</div>
          <div className="pl-3 pt-4 pb-3 pr-5 flex md:w-1/3 sm:w-1/2 justify-between rounded-lg shadow-xl border-2">
            <div className="px-3 flex flex-col -translate-y-1">
              <div className="font-semibold text-lg text-primary-800 ">
                Teacher Name
              </div>
              <div className="flex gap-2">
                <div>Sujbect</div>
                <div>⚫</div>
                <div>B.Tech</div>
              </div>
            </div>
            <Avatar />
          </div>
        </div>
        <div className="px-10 py-3">
          <div className=" text-xl font-semibold pb-2">Description</div>
          <div className="bg-gray-200 p-3 rounded-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ea
            consectetur placeat, veritatis consequatur dignissimos eos ab
            voluptates laboriosam fuga sapiente rem aspernatur quae
            exercitationem maxime expedita velit aliquam, cupiditate
            voluptatibus optio nisi consequuntur? Non, blanditiis incidunt.
          </div>
        </div>
        <div className="px-10 py-3">
          <div className=" text-xl font-semibold pb-2">Schedule</div>
          <div className="flex flex-col px-4 sm:flex-row bg-secondary-200 h-full justify-between items-center rounded-lg gap-3 text-base font-medium  p-2 shadow-lg">
            <div className=" flex flex-col justify-center items-center h-3/4 w-full sm:w-1/2 bg-white  rounded-lg p-2 text-secondary-800 shadow-lg">
              <div>CLASS FROM MONDAY TO SATURDAY</div>
              <div className="flex justify-center items-center">AT 8:00</div>
            </div>
            <div className=" flex flex-col justify-center items-center bg-white h-3/4 w-full sm:w-1/2 shadow-lg rounded-lg text-secondary-800">
              TODAY'S CLASS AT 8:00 AM
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className=" text-xl font-semibold pb-2">Classes</div>
          <div className="bg-secondary-200 p-3 rounded-md w-fit border-2 shadow-xl">
            <VideoCard />
          </div>
        </div>
      </Page>
    </div>
  );
}
