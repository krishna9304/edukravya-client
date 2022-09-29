import {
  CallEndRounded,
  ChatRounded,
  FullscreenRounded,
  PanToolRounded,
  SendRounded,
  SpeakerNotesOffRounded,
  ViewComfyOutlined,
  ViewComfyRounded,
} from "@mui/icons-material";
import { Avatar, IconButton, Input, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../components/logo";
import VideoPlayer from "../components/videoplayer";
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";

function LiveLecture() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const [isPresentationView, setIsPresentationView] = useState<boolean>(false);

  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );

  useEffect((): (() => void) => {
    return (): void => {};
  }, []);

  return (
    <div className="flex overflow-hidden flex-col w-full h-screen">
      <div className="w-full flex px-10 bg-gray-900 shadow-lg py-3">
        <div className=" flex sm:gap-6 gap-4 divide-x-2 justify-center items-center text-2xl font-semibold text-white">
          <Logo />
          <div className="md:pl-6 pl-4">Batch Name</div>
        </div>
        <div className="grow flex justify-center items-center">
          <div className="border-2 border-red-500 select-none bg-white ring-2 ring-white text-red-500 font-bold uppercase px-2 rounded-lg">
            Live
          </div>
        </div>
      </div>
      <div className="flex py-4 lg:justify-around lg:flex-row bg-secondary-100 grow h-[calc(100vh-16rem)] flex-col">
        <div className="flex grow gap-3 flex-col justify-between items-center">
          <div className="flex justify-center items-center grow px-4 lg:w-full">
            <div
              className={`grid ${
                !isChatOpen && "px-10"
              } gap-4 grid-cols-4 grid-row-4`}
            >
              <div
                className={`${isPresentationView && "hidden"} ${
                  isChatOpen ? "col-span-1" : "col-span-3 sm:col-span-1"
                }`}
              >
                <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
              </div>
              <div
                className={`${
                  isPresentationView
                    ? `col-span-4 ${!isChatOpen && "lg:px-[10%]"}`
                    : "col-span-3"
                } px-2 grow flex justify-center items-center`}
              >
                <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
              </div>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="py-2 px-6 rounded-full bg-gray-900 text-gray-500 flex gap-6 justify-center items-center">
              <IconButton
                onClick={() => {
                  setIsPresentationView((ppv) => !ppv);
                }}
                color="inherit"
              >
                {isPresentationView ? (
                  <ViewComfyOutlined color="inherit" />
                ) : (
                  <ViewComfyRounded color="inherit" />
                )}
              </IconButton>
              <IconButton color="inherit">
                <PanToolRounded color="inherit" />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#550000",
                }}
                color="error"
              >
                <div className="flex justify-center items-center grow">
                  <CallEndRounded />
                </div>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => {
                  setIsChatOpen((pco) => !pco);
                }}
              >
                {isChatOpen ? (
                  <SpeakerNotesOffRounded color="inherit" />
                ) : (
                  <ChatRounded color="inherit" />
                )}
              </IconButton>
              <IconButton color="inherit" onClick={() => {}}>
                <FullscreenRounded color="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="px-3 py-4">
          <div
            className={`sm:h-1/4 ${
              !isChatOpen && "hidden"
            } h-2/5 sm:h-1/4 lg:h-[calc(100%-5rem)] w-full lg:min-w-[20rem]`}
          >
            <div className="py-2 px-4 bg-primary-400 text-white shadow-lg rounded-t-lg uppercase font-semibold select-none">
              chats
            </div>
            <div className="flex px-4 h-full overflow-auto flex-col bg-primary-400">
              <div className="flex flex-col gap-2 py-2 py-3overflow-auto">
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">This is some chat message</div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
                <div className="flex bg-white rounded-md gap-2 px-4 py-2 items-center">
                  <div>
                    <Avatar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm">Name Name</div>
                    <div className="text-sm">
                      This is some chat message to test the ui responsiveness
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 px-4 bg-primary-400 rounded-b-md">
              <Input
                // value={message}
                // onChange={(e) => {
                //   setMessage(e.target.value);
                // }}
                placeholder="message"
                inputProps={{
                  className: "no-scrollbar",
                }}
                fullWidth={true}
                className="bg-primary-400"
                multiline
                maxRows={3}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SendRounded className="cursor-pointer" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveLecture;
