import { Button, Input } from "@mui/material";
import Peer, { DataConnection, MediaConnection } from "peerjs";
import { ChangeEvent, useEffect, useState } from "react";
import VideoPlayer from "../components/videoplayer";

function DevPage() {
  const [myStream, setMyStream] = useState<MediaStream>();
  const [hisStream, setHisStream] = useState<MediaStream>();
  const [fId, setFId] = useState<string>();
  const [myPeer, setMyPeer] = useState<Peer>();

  const getStream: (user?: boolean) => Promise<MediaStream> = (
    user = true
  ): Promise<MediaStream> => {
    if (user)
      return navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    return navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
  };

  useEffect((): (() => void) => {
    console.log("first");

    const peer = new Peer();
    setMyPeer(peer);

    getStream(false)
      .then((stream: MediaStream): void => {
        setMyStream(stream);
        peer.on("connection", (conn: DataConnection): void => {
          console.log("conn request to me", conn);
          conn.on("data", (data: unknown): void => {});
        });
        peer.on("call", (call: MediaConnection): void => {
          call.answer();
          call.on("stream", (stream: MediaStream): void => {
            console.log("got stream");
            setHisStream(stream);
          });
          call.on("error", console.error);
          call.on("close", (): void => console.log("call closed"));
        });
      })
      .catch(console.error);
    return (): void => {};
  }, []);

  const call: () => void = (): void => {
    if (myPeer && myStream && fId) {
      const conn: DataConnection = myPeer.connect(fId);
      conn.on("open", (): void => {
        conn.send("hi");
        console.log("calling", fId);
        const call: MediaConnection = myPeer.call(fId, myStream);
        call.on("stream", (stream: MediaStream): void => {
          console.log("got stream");
          setHisStream(stream);
        });
        call.on("error", console.error);
        call.on("close", (): void => console.log("call closed"));
      });
    }
  };

  return (
    <div>
      {myPeer && myPeer.id + ""}
      <br />
      {myPeer && myPeer.open + ""}
      <br />
      <Input
        onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
          setFId(e.target.value);
        }}
      />
      <Button
        onClick={(): void => {
          call();
        }}
      >
        call
      </Button>
      {myStream && <VideoPlayer stream={myStream} />}
      {hisStream && <VideoPlayer stream={hisStream} />}
    </div>
  );
}

export default DevPage;
