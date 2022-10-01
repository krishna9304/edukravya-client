import { AxiosError } from "axios";

export const getServerErrors = (err: AxiosError<any>) => {
  console.error("errs:", err);
  if (err && err.response && err.response.data && err.response.data.message) {
    const errString: string[] = err.response.data.message.split(":");
    if (err.response.data.message.includes(":")) errString.shift();
    let errs: string[] = [];
    try {
      errs = JSON.parse(errString[0]);
    } catch {
      errs = [errString[0]];
    }
    return errs;
  }
  return ["There was some problem"];
};
