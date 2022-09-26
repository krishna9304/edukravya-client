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
    if (id == user._id) {
      setProfileData(user);
    } else {
      // fetch profile data from server
    }
    return () => {};
  }, []);

  return (
    <Page>
      <div className="flex justify-center p-20 bg-pink-50 grow">
        <div className="w-full grow shadow-2xl rounded-xl bg-black flex">
          <div className="w-1/2 grow h-full flex justify-center items-center flex-col  p-10 rounded-l-xl border-r bg-white border-r-black">
            <span className="ring-8 w-40 hover:ring-4 rounded-full duration-300">
              <Avatar
                src={profileData?.avatar}
                sx={{
                  width: "10rem",
                  height: "10rem",
                }}
              />
            </span>
            <div className="flex flex-col w-full px-3 py-2 gap-2 grow justify-around">
              <div className="text-3xl font-semibold">
                Name: {profileData?.name}
              </div>
              <div className="text-lg">Phone: {profileData?.phone}</div>
              <div className="text-lg">Email: {profileData?.email}</div>
              <div className="text-lg">Bio{profileData?.bio}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center flex-col p-10 rounded-r-xl bg-gray-200">
          div
        </div>
      </div>
    </Page>
  );
}

export default Profile;
