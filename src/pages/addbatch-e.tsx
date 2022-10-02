import { Avatar, TextareaAutosize } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { BatchData } from "../components/batchcard";
import Page from "../components/page";
import VideoCard from "../components/videocard";
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";

// batch name, teacher name, subject, qualification, description, days
export default function AddBatchPage() {
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );

  const [thumbnailFile, setThumbnailFile] = useState();

  const [newBatchData, setNewBatchData] = useState<BatchData>({
    thumbnail: undefined,
    title: undefined,
  });

  return (
    <Page>
      <div className="text-2xl font-bold px-8 pt-6 pb-3 flex justify-between">
        {newBatchData.title ? newBatchData.title : "Add Batch Name"}
      </div>
      <div className="flex flex-col justify-center items-start md:items-start md:flex-row gap-4 md:justify-around pb-20">
        <div className="w-full md:max-w-prose flex flex-col justify-center md:items-center">
          <div className="px-10 py-3">
            <div className="text-xl font-semibold pb-2">Teacher</div>
            <div className="pl-3 pt-4 pb-3 pr-5 flex max-w-md justify-between rounded-lg shadow-md border-2">
              <div className="px-3 flex flex-col -translate-y-1">
                <div className="font-semibold text-lg text-primary-800 ">
                  {user.name}
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
          <div className="px-10 py-3 max-w-md w-full">
            <div className="text-xl font-semibold pb-2">Description</div>
            <TextareaAutosize
              maxRows={5}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setNewBatchData(
                  (pnb: BatchData): BatchData => ({
                    ...pnb,
                    description: e.target.value,
                  })
                );
              }}
              className="bg-gray-200 w-full focus:outline-none max-w-md p-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col  grow">
          <div className="px-10 py-3 grow min-w-fit">
            <div className="text-xl font-semibold pb-2">Schedule</div>
            <div className="p-2 grow bg-secondary-200 max-w-md rounded-lg text-base font-medium">
              <div className="grow uppercase max-w-md flex py-5 px-8 flex-col justify-center items-center bg-white rounded-lg text-secondary-800">
                Next CLASS starts today AT 8:00 AM
              </div>
            </div>
          </div>
          <div className="flex px-10 flex-col">
            <div className="text-xl grow font-semibold pb-2">Classes</div>
            <div className="flex grow max-w-md justify-center items-center">
              <div className="bg-secondary-200 p-3 w-full rounded-md border-2">
                <VideoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
