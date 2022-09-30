import { connect, Socket } from "socket.io-client";
import { serverURL } from "../constants";
import { connection } from "./socketaction";

const socket: Socket = connect(serverURL);

socket.on(connection, () => {
  console.log("socket connected");
});

export default socket;
