import React from "react";
import { User } from "../redux/slices/user";

export interface MessageData {
  _id: string;
  from: string;
  to: string;
  body: string;
  time: number;
}

function Message({ message, user }: { message: MessageData; user: string }) {
  const fromMe: boolean = message.to == user;
  return (
    <div
      className={`w-full group flex gap-2 ${
        fromMe ? "flex-row pr-14" : "flex-row-reverse pl-14"
      }`}
    >
      <div
        className={`max-w-fit flex flex-col cursor-default ${
          fromMe ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`opacity-0 group-hover:opacity-100 duration-300 text-[0.6rem] items-end`}
        >
          {new Date(message.time).toLocaleTimeString()}
        </div>
        <div
          className={`px-3 pt-1 pb-1.5 duration-300 shadow-gray-300 shadow-md ${
            fromMe
              ? "rounded-r-md bg-gray-300 rounded-bl-md"
              : "rounded-l-md bg-primary-600 text-white rounded-br-md"
          }`}
        >
          <div className="text-sm">{message.body}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
