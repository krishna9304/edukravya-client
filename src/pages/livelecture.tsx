import {
  CallEndRounded,
  ChatRounded,
  DoNotTouchRounded,
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
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";
import socket from "../utils/socket";
import {
  GET_SCREEN,
  GET_SCREEN_REQUEST,
  GET_STREAM,
  GET_USER,
  GET_USER_REQUEST,
  IS_ADMIN,
  PAUSE_USER,
} from "../utils/socketaction";
import {
  answerCall,
  getUserStream,
  initPeer,
  shareStreamAndSave,
} from "../utils/webRTC";

function LiveLecture() {
  const { lectureId } = useParams();

  const user: User = useSelector((state: RootState): User => state.user);

  const [userStream, setUserStream] = useState<MediaStream | undefined>();
  const [screenStream, setScreenStream] = useState<MediaStream | undefined>();
  const [isHandRaised, setIsHandRaised] = useState<boolean>(false);

  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const [isPresentationView, setIsPresentationView] = useState<boolean>(true);

  const [paused, setPaused] = useState<boolean>(true);

  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const [userPeer, setUserPeer] = useState<Peer>(new Peer());
  const [screenPeer, setScreenPeer] = useState<Peer>(new Peer());

  const [isFullScreen, setIsFullScreen] = useState(false);

  const dispatch: Dispatch<AnyAction> = useDispatch();

  // const shareUserStream = (studentId: string) => {
  //   if (userStream) {
  //     shareStream(userPeer, userStream, studentId, "user");
  //   } else {
  //     getUserStream().then((stream: MediaStream): void => {
  //       setUserStream(stream);
  //       console.log(userPeer, studentId);
  //       shareStream(userPeer, stream, studentId, "user");
  //     });
  //   }
  // };

  useEffect((): (() => void) => {
    if (userPeer && lectureId) {
      initPeer(userPeer, "user");
      answerCall(
        userPeer,
        lectureId,
        (stream: MediaStream, type: "user" | "screen"): void => {
          console.log("second");
          if (type == "user") {
            setUserStream(stream);
          } else {
            setScreenStream(stream);
          }
        }
      );
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
    socket.on(IS_ADMIN, (admin: boolean) => {
      setIsAdmin(admin);
      if (admin) {
        socket.on(GET_USER, (studentPeerId) => {
          // call the user
          if (studentPeerId) {
            console.log(userStream);
            shareStreamAndSave(
              userPeer,
              userStream,
              studentPeerId,
              "user",
              (stream: MediaStream): void => {
                setUserStream(stream);
              }
            );
          }
        });
        socket.on(GET_SCREEN, (studentPeerId) => {
          // call the user
          if (studentPeerId) {
            if (screenStream) {
              shareStreamAndSave(
                screenPeer,
                screenStream,
                studentPeerId,
                "screen",
                (stream: MediaStream): void => {
                  setScreenStream(stream);
                }
              );
            }
          }
        });
      } else {
        socket.on(PAUSE_USER, () => {
          console.log("pausing");
          setUserStream(undefined);
        });
        socket.on(GET_USER, () => {
          socket.emit(GET_STREAM, userPeer.id);
        });
      }
      console.log(admin);
    });
    return (): void => {};
  }, []);

  useEffect((): (() => void) => {
    if (userStream) {
      // do something
      socket.emit(GET_USER_REQUEST);
    } else {
      socket.emit(PAUSE_USER);
    }

    return (): void => {};
  }, []);

  return (
    <div className="flex overflow-hidden flex-col w-full h-screen">
      <div className="w-full flex px-10 bg-gray-900 shadow-lg py-3">
        <div className=" flex sm:gap-6 gap-4 divide-x-2 justify-center items-center text-2xl font-semibold text-white">
          <div className="hidden sm:block">
            <Logo />
          </div>
          <div className="md:pl-6 pl-4">Batch Name</div>
          <div className="select-none ring-2 ring-red-500 bg-white text-red-500 font-bold uppercase px-2 rounded-lg">
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
            <div className="py-2 px-6 rounded-full bg-gray-900 text-gray-500 flex gap-2 sm:gap-6 justify-center items-center">
              {isAdmin ? (
                <>
                  <IconButton
                    onClick={(): void => {
                      // pink;
                      if (!userStream) {
                        getUserStream()
                          .then((stream: MediaStream) => {
                            setUserStream(stream);
                          })
                          .catch(console.error);
                      } else {
                        userStream
                          .getTracks()
                          .forEach((track: MediaStreamTrack) => {
                            track.stop();
                          });
                        setUserStream(undefined);
                        console.log("pausing");
                        socket.emit(PAUSE_USER);
                      }
                    }}
                    color="inherit"
                  >
                    {paused ? (
                      <VideocamOffRounded color="inherit" />
                    ) : (
                      <VideocamRounded color="inherit" />
                    )}
                  </IconButton>
                  <IconButton
                    onClick={(): void => {
                      //
                    }}
                    color="inherit"
                  >
                    {screenStream ? (
                      <PausePresentationRounded color="inherit" />
                    ) : (
                      <PresentToAllRounded color="inherit" />
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
                </>
              ) : (
                <IconButton color="inherit">
                  {isHandRaised ? (
                    <PanToolRounded color="inherit" />
                  ) : (
                    <DoNotTouchRounded color="inherit" />
                  )}
                </IconButton>
              )}
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
                onClick={(): void => {
                  setIsFullScreen((pifs: boolean): boolean => !pifs);
                }}
                color="inherit"
              >
                <FullscreenRounded color="inherit" />
              </IconButton>
              <IconButton
                onClick={(): void => {
                  // const f: string | null = window.prompt("fId");
                  // getUserStream().then((stream: MediaStream): void => {
                  //   setUserStream(stream);
                  //   if (userPeer && f) {
                  //     const conn: DataConnection = userPeer.connect(f);
                  //     conn.on("open", (): void => {
                  //       const call: MediaConnection = userPeer.call(f, stream, {
                  //         metadata: {
                  //           streamType: "user",
                  //         },
                  //       });
                  //       call.on("error", console.error);
                  //       call.on("close", (): void => {
                  //         console.log("call closed");
                  //       });
                  //     });
                  //   }
                  // });
                  // const f: string | null = window.prompt("fId");
                  // f && shareUserStream(f);
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
