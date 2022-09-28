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

  useEffect((): (() => void) => {
    if (id == user.userId) {
      setProfileData(user);
    } else {
      // fetch profile data from server
    }
    return () => {};
  }, []);
  return (
    <Page>
      <div className="flex justify-center sm:px-20 sm:py-10 bg-pink-50 grow">
        <div className="w-full max-w-3xl grow shadow-2xl rounded-xl flex flex-col sm:flex-row">
          <div className="sm:w-1/2 grow h-full flex justify-center items-center flex-col p-10 rounded-l-xl border-r bg-white border-r-black">
            <span className="ring-8 w-40 hover:ring-4 rounded-full duration-300">
              <Avatar
                src={profileData?.avatar}
                sx={{
                  width: "10rem",
                  height: "10rem",
                }}
              />
            </span>
            <div className="flex flex-col w-full px-3 py-2 gap-1 grow justify-around">
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">Name:</div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.name}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Username:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.userId}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Phone:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.phone}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Email:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.email}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  About Me:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.bio}</div>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 grow h-full flex justify-center items-center flex-col gap-1 p-10 rounded-r-xl bg-white">
            <div className="flex flex-col w-full py-2 gap-1  justify-around">
              <div className="text-lg font-semibold">MY BATCH</div>
              <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                <div className="bg-blue-300 p-2 rounded-md">BACKLOG 1.0</div>
                <div className="bg-green-300 p-2 rounded-md">BACKLOG 2.0</div>
              </div>
            </div>
            <div className="flex flex-col w-full py-2 gap-1  justify-around">
              <div className="text-lg font-semibold">MY BOOK</div>
              <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                <div className="bg-purple-300 p-2 rounded-md">PHYSICS</div>
                <div className="bg-orange-300 p-2 rounded-md">PHYSICS</div>
              </div>
            </div>
            <div className="flex flex-col w-full py-1 gap-1 grow justify-around">
              <div className="bg-white py-1 gap-1">
                <div className="text-lg font-semibold">Points</div>
                <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                  000
                </div>
              </div>
              {/* <div className="bg-white py-1 gap-1">
                <div className="text-lg font-semibold">Top Results</div>
                <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg text-left">
                  000
                </div>
              </div> */}
              <div className="flex justify-end">
                <Button variant="contained">SHARE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
export default Profile;
