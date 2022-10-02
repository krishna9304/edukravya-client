import { Avatar, Button } from "@mui/material";
import Page from "../components/page";
import VideoCard from "../components/videocard";
import { useState } from "react";
import { Subjects } from "./signup";

// batch name, teacher name, subject, qualification, description
export default function Batchpage() {
  return (
    <Page>
      <div className="text-2xl font-bold px-8 pt-6 pb-3 flex justify-between">
        BATCH NAME
      </div>
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-4 md:justify-around pb-20">
        <div>
          <div className="px-10 py-3">
            <div className="text-xl font-semibold pb-2">Teacher</div>
            <div className="pl-3 pt-4 pb-3 pr-5 flex max-w-md justify-between rounded-lg shadow-md border-2">
              <div className="px-3 flex flex-col -translate-y-1">
                <div className="font-semibold text-lg text-primary-800 ">
                  Teacher Name
                </div>
                <div className="flex items-center gap-2">
                  <div>Sujbect</div>
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <div>B.Tech</div>
                </div>
              </div>
              <Avatar />
            </div>
          </div>
          <div className="px-10 py-3">
            <div className=" text-xl font-semibold pb-2">Description</div>
            <div className="bg-gray-200 max-w-md p-3 rounded-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              ea consectetur placeat, veritatis consequatur dignissimos eos ab
              voluptates laboriosam fuga sapiente rem aspernatur quae
              exercitationem maxime expedita velit aliquam, cupiditate
              voluptatibus optio nisi consequuntur? Non, blanditiis incidunt.
            </div>
          </div>
        </div>
        <div className="flex flex-col  grow">
          <div className="px-10 py-3 grow min-w-fit">
            <div className="text-xl font-semibold pb-2">Schedule</div>
            <div className="p-2 grow bg-secondary-200 max-w-md rounded-lg text-base font-medium">
              <div className="grow uppercase max-w-sm flex py-5 px-8 flex-col justify-center items-center bg-white rounded-lg text-secondary-800">
                Next CLASS starts today AT 8:00 AM
              </div>
            </div>
          </div>
          <div className="flex px-10 flex-col">
            <div className="text-xl grow font-semibold pb-2">Classes</div>
            <div className="flex grow max-w-md justify-center items-center">
              <div className="bg-secondary-200 p-3 w-full rounded-md border-2">
                <VideoCard />
                obv
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed flex justify-between items-center text-white font-semibold bottom-0 left-0 bg-primary-500 px-4 py-2 w-full">
        <div>Price: 1500</div>
        <Button color="info" variant="contained">
          Buy
        </Button>
      </div>
    </Page>
  );
}
