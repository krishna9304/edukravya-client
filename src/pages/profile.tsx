import { InfoOutlined, InfoRounded, StarRounded } from "@mui/icons-material";
import { Avatar, Button, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BatchCard, { BatchData } from "../components/batchcard";
import Page from "../components/page";
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";
import thumbnail from "../assets/demobatch.svg";

function Profile() {
  const { id } = useParams();

  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );

  const [profileData, setProfileData] = useState<null | User>(null);
  const [myBatches, setMyBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: thumbnail,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: thumbnail,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: thumbnail,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: thumbnail,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: thumbnail,
      title: "Batch Title",
    },
  ]);

  useEffect(() => {
    if (id == user.userId) {
      setProfileData(user);
    } else {
      // fetch profile data from server
    }
    return () => {};
  }, []);

  return (
    <Page>
      <div className="flex flex-col py-10 md:flex-row bg-pink-50 grow">
        <div className="px-10 flex">
          <div className="w-full grow h-full flex justify-center items-center flex-col md:w-1/2 bg-secondary-200 px-10 py-6 rounded-xl">
            <span className="ring-8 w-60 hover:ring-4 rounded-full bg-black duration-300">
              <Avatar
                src={profileData?.avatar}
                sx={{
                  width: "15rem",
                  height: "15rem",
                }}
              />
            </span>
            <div className="flex flex-col w-full px-3 py-2 gap-3 grow justify-around">
              <div className="text-3xl font-semibold">
                Name: {profileData?.name}
              </div>
              <div className="flex flex-col justify-between w-full sm:flex-row gap-2">
                <div className="text-lg">Phone: {profileData?.phone}</div>
                <div className="text-lg">Email: {profileData?.email}</div>
              </div>
              <div className="max-w-sm">Bio{profileData?.bio}</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className={`${
              !myBatches.length && "hidden"
            } w-screen md:w-[50vw] px-10 py-4 md:py-0 flex flex-col gap-3`}
          >
            <div className="font-bold text-xl">My Batches</div>
            <div className="p-4 rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
              <div className="flex rounded-sm snap-x snap-mandatory overflow-auto gap-4">
                {myBatches.map((myBatch: BatchData, idx: number) => {
                  return <BatchCard key={idx} batchData={myBatch} />;
                })}
              </div>
            </div>
          </div>
          <div className="p-3 flex flex-col gap-5">
            <div className="flex text-xl items-center gap-2">
              <span className="flex font-semibold text-primary-700 items-baseline">
                Points: {200}
              </span>
              <span className="text-yellow-500 flex">
                <StarRounded />
              </span>
              <span className="text-gray-500 flex">
                <Tooltip
                  title={"These points are used for . . . , nothing (yet)"}
                >
                  <InfoOutlined sx={{ fontSize: 18 }} />
                </Tooltip>
              </span>
            </div>
            <div className="text-xl font-bold">
              <div>Top Results</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Profile;
