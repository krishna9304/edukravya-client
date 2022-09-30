import Peer, { DataConnection, MediaConnection } from "peerjs";

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

const webRTC = {
  initPeer,
  getUserStream,
  getScreenStream,
};

export default webRTC;
