import {
  ContentCopyRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  Tooltip,
} from "@mui/material";
import { Dispatch, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../components/page";
import { setUser, User } from "../redux/slices/user";
import { RootState } from "../redux/store";
import validator from "validator";
import server from "../axios";
import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { AxiosError, AxiosResponse } from "axios";
import { getServerErrors } from "../helpers/servererrors";
import { toast } from "react-toastify";

interface UpdatedProfileData {
  name?: string;
  email?: string;
  phone?: string;
  userId?: string;
  bio?: string;
  password?: string;
}

const getErrors: (updatedProfileData: UpdatedProfileData | null) => string[] = (
  updatedProfileData: UpdatedProfileData | null
): string[] => {
  const errs: string[] = [];
  if (updatedProfileData) {
    if (
      updatedProfileData.email != null &&
      !validator.isEmail(updatedProfileData.email + "")
    ) {
      errs.push("Invalid Email");
    }
    if (
      updatedProfileData.phone != null &&
      !validator.isMobilePhone(updatedProfileData.phone + "")
    ) {
      errs.push("Invalid Phone");
    }
    if (
      (updatedProfileData.password != null ||
        updatedProfileData.password != undefined) &&
      updatedProfileData.password.trim().length < 8
    ) {
      errs.push("Invalid Password");
    }
    if (updatedProfileData.userId != null && !updatedProfileData.userId) {
      errs.push("Invalid Username");
    }
    if (updatedProfileData.name != null && !updatedProfileData.name) {
      errs.push("Invalid Name");
    }
  }
  return errs;
};

function Profile() {
  const { id } = useParams();
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );
  const isMyProfile: boolean = id == user.userId;
  const [profileData, setProfileData] = useState<User | null>(
    isMyProfile ? user : null
  );

  const [, setCookie] = useCookies<"jwt", { jwt: string }>(["jwt"]);

  const [updatedProfileData, setUpdatedProfileData] =
    useState<UpdatedProfileData | null>({
      ...profileData,
    });

  const [isUpdatedPswdVisible, setIsUpdatedPswdVisible] =
    useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const handleUpdate: () => void = (): void => {
    if (
      !getErrors(updatedProfileData).length &&
      updatedProfileData &&
      !Object.values(updatedProfileData).includes(null) &&
      !Object.values(updatedProfileData).includes("")
    ) {
      server
        .put("/api/user/update", {
          name: updatedProfileData?.name,
          email: updatedProfileData?.email,
          password: updatedProfileData?.password,
          phone: updatedProfileData?.phone,
          userId: updatedProfileData?.userId,
        })
        .then(
          ({
            data: { user, token },
          }: AxiosResponse<{ user: User; token: string }>) => {
            dispatch(setUser(user));
            setCookie("jwt", token);
            console.log(user);
          }
        )
        .catch((err: AxiosError<any>) => {
          getServerErrors(err).forEach((err: string) => {
            toast.error(err);
          });
        });
    }
    if (getErrors(updatedProfileData).length) {
      getErrors(updatedProfileData).forEach((err: string) => {
        toast.error(err);
      });
    }
    if (updatedProfileData) {
      if (Object.values(updatedProfileData).includes(null)) {
        Object.keys(updatedProfileData).forEach((key: string): void => {
          if (!updatedProfileData[key as keyof UpdatedProfileData])
            toast.error(`field \`${key}\` can not be empty`);
        });
      }
    }
  };

  return (
    <Page>
      <div className="flex justify-center sm:px-20 sm:py-10 bg-pink-50 grow">
        <div className="w-full max-w-3xl grow shadow-2xl rounded-xl flex flex-col sm:flex-row">
          <div className="sm:w-1/2 grow h-full flex justify-center items-center flex-col p-10 rounded-l-xl border-r bg-white border-r-black">
            <span className="ring-8 w-40 hover:ring-4 rounded-full duration-300">
              <Avatar
                src={profileData?.avatar}
                sx={{
                  width: "10rem",
                  height: "10rem",
                }}
              />
            </span>
            <div className="flex flex-col w-full px-3 py-2 gap-1 grow justify-around">
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">Name:</div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.name}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Username:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.userId}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Phone:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.phone}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Email:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.email}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  About Me:
                </div>
                {/* <div>This is demo text</div> */}
                <div>{profileData?.bio}</div>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 grow h-full flex justify-center items-center flex-col gap-1 p-10 rounded-r-xl bg-white">
            <div className="flex flex-col w-full py-2 gap-1  justify-around">
              <div className="text-lg font-semibold">MY BATCH</div>
              <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                <div className="bg-blue-300 p-2 rounded-md">BACKLOG 1.0</div>
                <div className="bg-green-300 p-2 rounded-md">BACKLOG 2.0</div>
              </div>
            </div>
            <div className="flex flex-col w-full py-2 gap-1  justify-around">
              <div className="text-lg font-semibold">MY BOOK</div>
              <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                <div className="bg-purple-300 p-2 rounded-md">PHYSICS</div>
                <div className="bg-orange-300 p-2 rounded-md">PHYSICS</div>
              </div>
            </div>
            <div className="flex flex-col w-full py-1 gap-1 grow justify-around">
              <div className="bg-white py-1 gap-1">
                <div className="text-lg font-semibold">Points</div>
                <div className="flex flex-col grow items-left max-w-full bg-gray-200 p-4 rounded-lg gap-2 text-left">
                  000
                </div>
              </div>
              <div className="flex justify-between">
                <Tooltip placement="bottom" title="Update user info">
                  <Button
                    onClick={(): void => {
                      setIsUpdating(true);
                    }}
                    variant="outlined"
                  >
                    update
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" title="COPY USERNAME">
                  <Button
                    onClick={(): void => {
                      navigator.clipboard.writeText(
                        `${location.origin}/user/${user.userId}`
                      );
                    }}
                    endIcon={
                      <ContentCopyRounded
                        fontSize={"medium"}
                        className="text-white"
                      />
                    }
                    variant="contained"
                  >
                    Share
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isUpdating}
        onClose={(): void => {
          setIsUpdating(false);
        }}
      >
        <div className="absolute w-max max-w-[100vw] flex flex-col gap-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 md:py-8 px-6 md:px-12 bg-white rounded-lg shadow-md">
          <div className="text-lg font-semibold">Update Profile</div>
          <div className="flex gap-4 flex-col justify-around">
            <Input
              error={
                updatedProfileData?.name != null &&
                updatedProfileData?.name.trim().length < 8
              }
              defaultValue={updatedProfileData?.name}
              onChange={(e): void => {
                setUpdatedProfileData(
                  (
                    prevData: UpdatedProfileData | null
                  ): UpdatedProfileData | null => ({
                    ...prevData,
                    name: e.target.value,
                  })
                );
              }}
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Name"
            />
            <Input
              error={
                updatedProfileData?.userId != null &&
                updatedProfileData?.userId.trim().length < 8
              }
              defaultValue={updatedProfileData?.userId}
              onChange={(e): void => {
                setUpdatedProfileData(
                  (
                    prevData: UpdatedProfileData | null
                  ): UpdatedProfileData | null => ({
                    ...prevData,
                    userId: e.target.value,
                  })
                );
              }}
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Username"
            />
            <Input
              error={
                updatedProfileData?.email != null &&
                !validator.isEmail(updatedProfileData?.email + "")
              }
              defaultValue={updatedProfileData?.email}
              onChange={(e) => {
                setUpdatedProfileData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
              type="email"
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Email Address"
            />
            <Input
              error={
                updatedProfileData?.phone != null &&
                !validator.isMobilePhone(updatedProfileData?.phone + "")
              }
              defaultValue={updatedProfileData?.phone}
              onChange={(e): void => {
                setUpdatedProfileData(
                  (
                    prevData: UpdatedProfileData | null
                  ): UpdatedProfileData | null => ({
                    ...prevData,
                    phone: e.target.value,
                  })
                );
              }}
              type="tel"
              size="small"
              className="px-2 py-2 w-full text-gray-500 bg-white rounded-sm "
              placeholder="Phone"
            />
            <Input
              onChange={(e): void => {
                setUpdatedProfileData(
                  (
                    prevData: UpdatedProfileData | null
                  ): UpdatedProfileData | null => ({
                    ...prevData,
                    password: e.target.value,
                  })
                );
              }}
              error={
                updatedProfileData?.password != null &&
                updatedProfileData?.password.trim().length < 8
              }
              size="small"
              type={isUpdatedPswdVisible ? "text" : "password"}
              className="px-2 py-2.5 text-gray-500 bg-white w-full rounded-sm "
              placeholder="Create new Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(): void => {
                      setIsUpdatedPswdVisible((pv: boolean): boolean => !pv);
                    }}
                    edge="end"
                  >
                    {isUpdatedPswdVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="flex flex-row-reverse w-full">
            <Button onClick={handleUpdate} variant="contained">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </Page>
  );
}
export default Profile;
