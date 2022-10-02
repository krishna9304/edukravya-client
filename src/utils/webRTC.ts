import Peer, { DataConnection, MediaConnection } from "peerjs";
import socket from "./socket";
import { JOIN_LECTURE } from "./socketaction";

export const getUserStream: () => Promise<MediaStream> =
  (): Promise<MediaStream> => {
    return navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
  };
export const getScreenStream: () => Promise<MediaStream> =
  (): Promise<MediaStream> => {
    return navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
  };

export const initPeer: (peer: Peer, name: string) => void = (
  peer: Peer,
  name: string
) => {
  // On Error
  peer.on("error", (err: Error): void => {
    console.error(err);
  });
  // On Open
  peer.on("open", (id: string): void => {
    console.log("[p]open", name);
    console.log(id);
  });
  // On Connection
  peer.addListener("connection", (conn: DataConnection): void => {
    conn.on("data", (data: unknown): void => {
      console.log(data, "data");
    });
  });
};

export const answerCall = (
  peer: Peer,
  lectureId: string,
  cb: (stream: MediaStream, type: "user" | "screen") => void
): void => {
  peer.addListener("open", () => {
    socket.emit(JOIN_LECTURE, {
      peerId: peer.id,
      lectureId: lectureId,
    });
  });
  peer.on("call", (call: MediaConnection): void => {
    call.answer();
    call.on("stream", (stream: MediaStream): void => {
      cb(stream, call.metadata.streamType);
    });
    call.on("error", console.error);
    call.on("close", (): void => {
      console.log("call closed");
    });
  });
};

export const shareStream = (
  peer: Peer,
  stream: MediaStream,
  studentId: string,
  type: "user" | "screen"
) => {
  if (peer && studentId) {
    console.log(studentId);
    const conn = peer.connect(studentId);
    conn.on("open", () => {
      const call: MediaConnection = peer.call(studentId, stream, {
        metadata: {
          streamType: type,
        },
      });
      call.on("error", console.error);
      call.on("close", (): void => {
        console.log("call closed");
      });
    });
    conn.on("data", console.log);
    conn.on("error", console.error);
    conn.on("iceStateChanged", () => console.log("IceStageChanged"));
  }
};

export const shareStreamAndSave = (
  peer: Peer,
  stream: MediaStream | undefined,
  studentId: string,
  type: "user" | "screen",
  cb: (stream: MediaStream) => void
) => {
  const getStream: () => Promise<MediaStream> =
    type == "user" ? getUserStream : getScreenStream;
  if (stream) {
    shareStream(peer, stream, studentId, type);
  } else {
    getStream().then((stream: MediaStream): void => {
      cb(stream);
      console.log(peer, studentId);
      shareStream(peer, stream, studentId, type);
    });
  }
};
