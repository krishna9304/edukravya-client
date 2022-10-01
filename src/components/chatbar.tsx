import {
  ArrowLeftRounded,
  ArrowRightRounded,
  SendRounded,
} from "@mui/icons-material";

import { Avatar, InputAdornment, OutlinedInput, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import Message, { MessageData } from "./message";

function Chatbar() {
  const [isOpen, setIsOpen] = useState<boolean>(!true);
  const [users, setusers] = useState([
    "John",
    "Rohn",
    "Corn",
    "Horn",
    "LOL",
    "BKLOL",
    "LOLA",
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageData[]>([
    {
      _id: "1234567890",
      from: "John",
      to: "Yash",
      body: "Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash Hey!,Jaa k hash ",
      time: Date.now(),
    },
    {
      _id: "1234567891",
      from: "Yash",
      to: "John",
      body: "yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash yash ",
      time: Date.now(),
    },
    {
      _id: "1234567892",
      from: "John",
      to: "Yash",
      body: "Hey!",
      time: Date.now(),
    },
    {
      _id: "1234567893",
      from: "Yash",
      to: "John",
      body: "Hey!",
      time: Date.now(),
    },
    {
      _id: "1234567894",
      from: "John",
      to: "Yash",
      body: "Hey!",
      time: Date.now(),
    },
    {
      _id: "1234567895",
      from: "Yash",
      to: "John",
      body: "Hey!This is me. Yash yash yashyash yash",
      time: Date.now(),
    },
  ]);

  useEffect(() => {
    const isOpenResizeHandler = () => {
      if (window.innerWidth < 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", isOpenResizeHandler);

    return () => {
      window.removeEventListener("resize", isOpenResizeHandler);
    };
  }, []);

  return (
    <div
      className={`top-0 z-20 fixed sm:w-96 sm:flex ${
        isOpen ? "right-0" : "-right-[calc(24rem-1.5rem)]"
      } flex items-center  justify-center duration-300`}
    >
      <Tooltip placement="left" title="CHAT">
        <div
          onClick={(): void => setIsOpen((po: boolean): boolean => !po)}
          className="flex w-6 shadow-y-lg shadow-gray-500 translate-x-[1px] justify-center items-center h-20 bg-secondary-200 rounded-l-lg top-[50vh] left-0 cursor-pointer"
        >
          {isOpen ? <ArrowRightRounded /> : <ArrowLeftRounded />}{" "}
        </div>
      </Tooltip>
      <div className="h-screen flex shadow-lg shadow-gray-500 flex-col gap-4 grow bg-secondary-200 py-3 px-6 top-0">
        <div className="font-normal text-2xl">Chats</div>
        <div className="flex h-full gap-4 flex-col">
          <div className="flex gap-3 max-w-xs p-2 overflow-x-auto">
            {users.map((name, idx) => {
              return (
                <Tooltip key={idx} title={name}>
                  <div
                    className={`p-1 flex justify-center items-center rounded-full ${
                      currentUser == name &&
                      " bg-gradient-to-br from-secondary-900 via-primary-700"
                    }`}
                  >
                    <div
                      className={`${
                        currentUser == name &&
                        " scroll-ml-2 md:snap-start snap-center duration-300 ring-black rounded-full"
                      }`}
                      onClick={(): void => setCurrentUser(name)}
                    >
                      <Avatar />
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
          <div className="flex flex-col grow">
            <div className="flex items-center gap-2 font-semibold rounded-t-md py-2 px-5 border-b shadow-black bg-white">
              {currentUser}
              <div className="p-1 bg-green-500 rounded-full" />
            </div>
            <div className="bg-white  h-[60vh] grow overflow-y-auto flex flex-col-reverse p-4 gap-2 rounded-b-md">
              {messages.map((message: MessageData, idx: number) => {
                return <Message key={idx} user={"Yash"} message={message} />;
              })}
            </div>
          </div>
          <div className="py-2">
            <OutlinedInput
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              size="small"
              fullWidth={true}
              placeholder="message"
              inputProps={{
                className: "no-scrollbar",
              }}
              className="w-full bg-white"
              multiline
              maxRows={3}
              endAdornment={
                <InputAdornment position="end">
                  <SendRounded
                    className="cursor-pointer"
                    onClick={(e) => {
                      setMessages((pmsgs: MessageData[]) => [
                        ...pmsgs,
                        {
                          _id: "1234567890",
                          from: "Yash",
                          to: currentUser,
                          body: message,
                          time: Date.now(),
                        },
                      ]);

                      setMessage("");
                    }}
                  />
                </InputAdornment>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbar;
