import axios from "axios";
import { serverURL } from "./constants";

const server = axios.create({
  baseURL: serverURL,
});

export default server;
