import { Button, Input } from "@mui/material";
import Peer from "peerjs";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/videoplayer";
import { v4 as uuid } from "uuid";

function DevPage() {
  const [peer, setPeer] = useState<Peer>();
  const [myStream, setMyStream] = useState<MediaStream>();
  const [hisStream, setHisStream] = useState<MediaStream>();
  const [fId, setFId] = useState<string>();

  const [myPeer, setMyPeer] = useState<Peer>();

  useEffect(() => {}, []);
  useEffect(() => {
    const peer = new Peer(uuid());
    setMyPeer(peer);

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream: MediaStream) => {
        setMyStream(stream);
      })
      .catch(console.error);

    return () => {};
  }, []);

  useEffect(() => {
    if (fId && myPeer && myStream) {
      myPeer.connect(fId + "");
      myPeer.on("connection", (conn) => {
        console.log("done");
      });
      myPeer.on("open", () => {});
    }

    return () => {};
  }, [fId]);

  return (
    <div>
      {myPeer && myPeer.id + ""}
      <br />
      {myPeer && myPeer.open + ""}
      <br />
      <Input
        onChange={(e) => {
          setFId(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          if (myPeer && myStream && fId) {
            const call = myPeer.call(fId, myStream);
            console.log("calling");
            call.on("stream", (stream) => {
              setHisStream(stream);
              console.log("got stream");
            });
            myPeer.on("call", (call) => {
              call.answer(myStream);
              call.on("stream", (stream) => {
                setHisStream(stream);
                console.log("got stream");
              });
              console.log("answering");
            });
          }
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
