import {
  CallEndRounded,
  PanToolRounded,
  SupervisedUserCircleRounded,
  VolumeMuteRounded,
  VolumeOffRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

function LivePresenterView() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-pink-50">
      <div className="w-full flex justify-around bg-primary-700 py-4">
        <div className="text-2xl font-semibold text-white">Batch Name</div>
        <div className="border-2 border-red-500 select-none bg-white ring-2 ring-white text-red-500 font-bold uppercase px-2 rounded-md">
          Live
        </div>
      </div>
      <div className="grow grid gap-6 grid-rows-4 bg-pink-200 p-6">
        <div className="aspect-video bg-pink-300 rounded-md"></div>
        <div className="grow grid gap-6 bg-pink-300">
          <div className="sm:col-span-1 flex justify-center items-center col-span-3 bg-pink-500 rounded-md">
            <div className="max-w-xs w-full rounded-md aspect-video bg-pink-600"></div>
          </div>
          <div className="col-span-2 rounded-md bg-pink-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            quo repudiandae laudantium autem quia. Reprehenderit nisi mollitia
            repellendus corporis sed minus sapiente itaque pariatur, quis maxime
            nihil beatae, eos sint nam officiis facilis, dolorem similique vitae
            dolor eligendi quaerat dignissimos harum a. Fuga quas corrupti
            vitae, reprehenderit amet necessitatibus quo ipsam repellendus sequi
            at excepturi facere minus dolore nesciunt aut quia voluptate rerum
            tempora doloremque. Quos eius eos incidunt qui nulla excepturi
            quibusdam fugiat. Distinctio incidunt temporibus laboriosam
            molestiae? Cumque voluptatibus magnam laborum praesentium eaque,
            architecto vel asperiores assumenda error veniam tenetur ducimus qui
            perferendis reiciendis corporis doloremque libero ipsum?
          </div>
        </div>
      </div>
      <div className="p-2 flex gap-3 justify-center items-center">
        <IconButton>
          <VolumeOffRounded />
        </IconButton>
        <IconButton>
          <CallEndRounded color="error" />
        </IconButton>
        <IconButton>
          <PanToolRounded />
        </IconButton>
      </div>
    </div>
  );
}

export default LivePresenterView;
