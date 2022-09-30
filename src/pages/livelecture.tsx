import {
  CallEndRounded,
  ChatRounded,
  FullscreenRounded,
  MicOffRounded,
  MicRounded,
  PanToolRounded,
  PausePresentationRounded,
  PresentToAllRounded,
  SendRounded,
  SpeakerNotesOffRounded,
  VideocamOffRounded,
  VideocamRounded,
  ViewComfyOutlined,
  ViewComfyRounded,
} from "@mui/icons-material";
import { Avatar, IconButton, Input, InputAdornment } from "@mui/material";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import Peer, { DataConnection, MediaConnection } from "peerjs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import VideoPlayer from "../components/videoplayer";
import {
  LectureData,
  shareUser,
  startLecture,
  toggelPresentationView,
  toggleAudio,
  toggleChat,
  toggleVideo,
} from "../redux/slices/liveLecture";
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";
import { getScreenStream, getUserStream, initPeer } from "../utils/webRTC";

interface Paused {
  video: boolean;
  audio: boolean;
}

function LiveLecture() {
  const { lectureId } = useParams();

  const user: User = useSelector((state: RootState): User => state.user);

  const [userStream, setUserStream] = useState<MediaStream | undefined>();
  const [screenStream, setScreenStream] = useState<MediaStream | undefined>();

  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPresentationView, setIsPresentationView] = useState<boolean>(true);

  const [paused, setPaused] = useState<Paused>({
    audio: true,
    video: true,
  });

  const [userPeer, setUserPeer] = useState<Peer>();
  const [screenPeer, setScreenPeer] = useState<Peer>();

  const [isFullScreen, setIsFullScreen] = useState(false);

  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect((): (() => void) => {
    if (userPeer) {
      initPeer(userPeer, "user");
      userPeer.on("call", (call: MediaConnection): void => {
        call.answer();
        call.on("stream", (stream: MediaStream): void => {
          console.log(`got ${call.metadata.streamType} stream`);
          if (call.metadata.streamType == "user") {
            setUserStream(stream);
          } else {
            setScreenStream(stream);
          }
        });
        call.on("error", console.error);
        call.on("close", (): void => console.log("call closed"));
      });
    }
    return (): void => {};
  }, [userPeer]);

  useEffect((): (() => void) => {
    if (screenPeer) {
      initPeer(screenPeer, "screen");
    }
    return (): void => {};
  }, [screenPeer]);

  useEffect((): (() => void) => {
    setUserPeer(new Peer());
    setScreenPeer(new Peer());
    return (): void => {};
  }, []);

  return (
    <div className="flex overflow-hidden flex-col w-full h-screen">
      <div className="w-full flex px-10 bg-gray-900 shadow-lg py-3">
        <div className=" flex sm:gap-6 gap-4 divide-x-2 justify-center items-center text-2xl font-semibold text-white">
          <Logo />
          <div className="md:pl-6 pl-4">Batch Name</div>
          <div className="border-2 border-red-500 select-none bg-white ring-2 ring-white text-red-500 font-bold uppercase px-2 rounded-lg">
            Live
          </div>
        </div>
      </div>
      <div className="flex py-4 lg:justify-around lg:flex-row bg-secondary-100 grow h-[calc(100vh-16rem)] flex-col">
        <div className="flex grow gap-3 flex-col justify-between items-center">
          <div
            className={`flex justify-center items-center grow px-4 lg:w-full`}
          >
            <div
              className={`grid ${
                !isChatOpen && "px-10"
              } w-full gap-4 grid-cols-4 grid-row-4`}
            >
              <div
                className={`${
                  isChatOpen ? "col-span-1" : "col-span-3 sm:col-span-1"
                }`}
              >
                {/* secondary player */}
                <VideoPlayer
                  stream={isPresentationView ? userStream : screenStream}
                />
              </div>
              <div
                className={`col-span-3 px-2 grow flex justify-center items-center`}
              >
                {/* primary player */}
                <VideoPlayer
                  isFullScreen={isFullScreen}
                  stream={isPresentationView ? screenStream : userStream}
                />
              </div>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="py-2 px-6 rounded-full bg-gray-900 text-gray-500 flex gap-6 justify-center items-center">
              <IconButton
                onClick={(): void => {
                  setPaused(
                    (pp: Paused): Paused => ({
                      ...pp,
                      audio: !pp.audio,
                    })
                  );
                }}
                color="inherit"
              >
                {paused.audio ? (
                  <MicOffRounded color="inherit" />
                ) : (
                  <MicRounded color="inherit" />
                )}
              </IconButton>
              <IconButton
                onClick={(): void => {
                  setPaused(
                    (pp: Paused): Paused => ({
                      ...pp,
                      video: !pp.video,
                    })
                  );
                }}
                color="inherit"
              >
                {paused.video ? (
                  <VideocamOffRounded color="inherit" />
                ) : (
                  <VideocamRounded color="inherit" />
                )}
              </IconButton>
              <IconButton
                onClick={() => {
                  if (!screenStream) {
                    const f: string | null = prompt("fId:");
                    if (screenPeer && f) {
                      getScreenStream().then((stream: MediaStream) => {
                        setScreenStream(stream);
                        const conn: DataConnection = screenPeer.connect(f);
                        conn.on("open", (): void => {
                          console.log("sharing screen stream with", f);
                          const call: MediaConnection = screenPeer.call(
                            f,
                            stream,
                            {
                              metadata: {
                                streamType: "screen",
                              },
                            }
                          );
                          call.on("error", console.error);
                          call.on("close", (): void =>
                            console.log("call closed")
                          );
                        });
                      });
                    }
                  } else {
                    screenStream
                      .getTracks()
                      .forEach((track: MediaStreamTrack): void => track.stop());
                    setScreenStream(undefined);
                  }
                }}
                color="inherit"
              >
                {screenStream ? (
                  <PresentToAllRounded color="inherit" />
                ) : (
                  <PausePresentationRounded color="inherit" />
                )}
              </IconButton>
              <IconButton
                onClick={() => {
                  setIsPresentationView((pipv) => !pipv);
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
                onClick={(): void => {
                  const f: string | null = window.prompt("fId");
                  console.log("f:", f);
                  getUserStream().then((stream: MediaStream): void => {
                    setUserStream(stream);
                    if (userPeer && f) {
                      const conn: DataConnection = userPeer.connect(f);
                      conn.on("open", (): void => {
                        console.log("sharing user stream with", f);
                        const call: MediaConnection = userPeer.call(f, stream, {
                          metadata: {
                            streamType: "user",
                          },
                        });
                        call.on("error", console.error);
                        call.on("close", (): void =>
                          console.log("call closed")
                        );
                      });
                    }
                  });
                }}
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
                onClick={(): void => {
                  setIsChatOpen((pico: boolean): boolean => !pico);
                }}
              >
                {isChatOpen ? (
                  <SpeakerNotesOffRounded color="inherit" />
                ) : (
                  <ChatRounded color="inherit" />
                )}
              </IconButton>
              <IconButton
                onClick={() => {
                  setIsFullScreen((pifs: boolean): boolean => !pifs);
                }}
                color="inherit"
              >
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
              live chats
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
