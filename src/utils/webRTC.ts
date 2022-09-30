import Peer, { DataConnection, MediaConnection } from "peerjs";
import { LectureData } from "../redux/slices/liveLecture";

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
    console.log("[p]error");
    console.error(err);
  });
  // On Open
  peer.on("open", (id: string): void => {
    console.log("[p]open", name);
    console.log(peer.id);
  });
  // On Connection
  peer.on("connection", (conn: DataConnection): void => {
    console.log(`[p]connection`);
    conn.on("data", (data: unknown): void => {
      console.log(data, "data");
    });
  });
};

export const shareScreenStream = (
  state: LectureData,
  peer: Peer,
  studentPeerId: string
) => {
  if (state.streams.screenStream) {
    const conn: DataConnection = peer.connect(studentPeerId);
    conn.on("open", (): void => {
      console.log("sharing screen stream with", studentPeerId);
      if (state.streams.screenStream) {
        const call: MediaConnection = peer.call(
          studentPeerId,
          state.streams.screenStream,
          {
            metadata: {
              streamType: "screen",
            },
          }
        );
        call.on("error", console.error);
        call.on("close", (): void => console.log("call closed"));
      }
    });
  } else {
    getScreenStream()
      .then((stream: MediaStream): void => {
        state.streams.screenStream = stream;
        const conn: DataConnection = peer.connect(studentPeerId);
        conn.on("open", (): void => {
          console.log("sharing screen stream with", studentPeerId);
          const call: MediaConnection | undefined = peer?.call(
            studentPeerId,
            stream,
            {
              metadata: {
                streamType: "screen",
              },
            }
          );
          call?.on("error", console.error);
          call?.on("close", (): void => console.log("call closed"));
        });
      })
      .catch(console.error);
  }
};

export const shareUserStream = (
  state: LectureData,
  peer: Peer,
  studentPeerId: string
) => {
  let usetStream: MediaStream;
  if (state.streams.userStream) {
    const conn: DataConnection = peer.connect(studentPeerId);
    conn.on("open", (): void => {
      console.log("sharing user stream with", studentPeerId);
      if (state.streams.userStream) {
        const call: MediaConnection = peer.call(
          studentPeerId,
          state.streams.userStream,
          {
            metadata: {
              streamType: "user",
            },
          }
        );
        call.on("error", console.error);
        call.on("close", (): void => console.log("call closed"));
      }
    });
  } else {
    getScreenStream()
      .then((stream: MediaStream) => {
        state.streams.userStream = stream;
        const conn: DataConnection = peer.connect(studentPeerId);
        conn.on("open", (): void => {
          console.log("sharing user stream with", studentPeerId);
          const call: MediaConnection | undefined = peer?.call(
            studentPeerId,
            stream,
            {
              metadata: {
                streamType: "user",
              },
            }
          );
          call?.on("error", console.error);
          call?.on("close", (): void => console.log("call closed"));
        });
        return stream;
      })
      .catch(console.error);
  }
};

export const toggleAudioStream: (stream: MediaStream) => void = (
  stream: MediaStream
): void => {
  const firstAudioTrack: MediaStreamTrack = stream.getAudioTracks()[0];
  if (firstAudioTrack) firstAudioTrack.enabled = !firstAudioTrack?.enabled;
};
export const toggleVideoStream: (stream: MediaStream) => void = (
  stream: MediaStream
): void => {
  const firstVideoTrack: MediaStreamTrack = stream.getVideoTracks()[0];
  if (firstVideoTrack) firstVideoTrack.enabled = !firstVideoTrack?.enabled;
};

export const answerCall = (state: LectureData, peer: Peer) => {
  peer.on("call", (call: MediaConnection): void => {
    call.answer();
    call.on("stream", (stream: MediaStream): void => {
      console.log(`got ${call.metadata.streamType} stream`);
      if (call.metadata.streamType == "user") {
        if (state.streams.userStream) state.streams.userStream = stream;
      } else {
        if (state.streams.screenStream) state.streams.screenStream = stream;
      }
    });
    call.on("error", console.error);
    call.on("close", (): void => console.log("call closed"));
  });
};

const webRTC = {
  initPeer,
  getUserStream,
  getScreenStream,
  answerCall,
  toggleAudioStream,
  toggleVideoStream,
  shareUserStream,
  shareScreenStream,
};

export default webRTC;
