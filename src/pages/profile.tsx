import {
  ContentCopyRounded,
  EditRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Tooltip,
} from "@mui/material";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
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
  avatar?: any;
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
  const [updatedProfileData, setUpdatedProfileData] =
    useState<UpdatedProfileData | null>(null);

  const [updatedAvatarPreview, setUpdatedAvatarPreview] = useState(
    profileData?.avatar
  );

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
      // {
      //     name:
      //       updatedProfileData?.name != profileData?.name
      //         ? updatedProfileData?.name
      //         : null,
      //     email:
      //       updatedProfileData?.email != profileData?.email
      //         ? updatedProfileData?.email
      //         : null,
      //     password:
      //       updatedProfileData?.password != ""
      //         ? updatedProfileData?.password
      //         : null,
      //     phone:
      //       updatedProfileData?.phone != profileData?.phone
      //         ? updatedProfileData?.phone
      //         : null,
      //     userId:
      //       updatedProfileData?.userId != profileData?.userId
      //         ? updatedProfileData?.userId
      //         : null,
      //   }
      const reqBody = new FormData();
      if (updatedProfileData.avatar) {
        reqBody.append("avatar", updatedProfileData.avatar);
      }
      if (
        updatedProfileData.name &&
        updatedProfileData.name != profileData?.name
      ) {
        reqBody.append("name", updatedProfileData.name);
      }
      if (
        updatedProfileData.email &&
        updatedProfileData.email != profileData?.email
      ) {
        reqBody.append("email", updatedProfileData.email);
      }
      if (
        updatedProfileData.bio &&
        updatedProfileData.bio != profileData?.bio
      ) {
        reqBody.append("bio", updatedProfileData.bio);
      }
      if (
        updatedProfileData.phone &&
        updatedProfileData.phone != profileData?.phone
      ) {
        reqBody.append("phone", updatedProfileData.phone);
      }
      if (updatedProfileData.password) {
        reqBody.append("password", updatedProfileData.password);
      }
      if (
        updatedProfileData.userId &&
        updatedProfileData.userId != profileData?.userId
      ) {
        reqBody.append(".userId", updatedProfileData.userId);
      }
      if ([...reqBody.entries()].length) {
        server
          .put("/api/user/update", reqBody)
          .then(({ data }: AxiosResponse<{ user: User; token: string }>) => {
            dispatch(
              setUser({
                ...user,
                ...updatedProfileData,
              })
            );
            toast.success("User updated");
          })
          .catch((err: AxiosError<any>) => {
            getServerErrors(err).forEach((err: string) => {
              toast.error(err);
            });
          });
      }
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

  useEffect((): (() => void) => {
    let preview: string;
    if (updatedProfileData?.avatar) {
      preview = URL.createObjectURL(updatedProfileData?.avatar);
      setUpdatedAvatarPreview(preview);
    }
    return (): void => {
      URL.revokeObjectURL(preview);
    };
  }, [updatedProfileData?.avatar]);

  return (
    <Page>
      <div className="flex justify-center sm:px-20 sm:py-10 grow">
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
                <div>{profileData?.name}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Username:
                </div>
                <div>{profileData?.userId}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Phone:
                </div>
                <div>{profileData?.phone}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  Email:
                </div>
                <div>{profileData?.email}</div>
              </div>
              <div className="flex flex-col gap-1 font-semibold text-lg">
                <div className="text-gray-500 text-lg font-semibold">
                  About Me:
                </div>
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
              <div className="flex flex-row-reverse justify-between">
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
                {isMyProfile && (
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
                )}
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
          <div className="flex gap-4 sm:px-10 flex-col justify-between items-center">
            <Tooltip
              className="grow pl-6 flex justify-center items-center"
              placement="right-start"
              title={"Update Avatar"}
            >
              <FormControlLabel
                control={
                  <input
                    accept="image/*"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                      if (!e.target.files) return;
                      setUpdatedProfileData(
                        (
                          prevData: UpdatedProfileData | null
                        ): UpdatedProfileData | null => ({
                          ...prevData,
                          avatar: e.target.files?.[0],
                        })
                      );
                    }}
                    type="file"
                    className="hidden"
                  />
                }
                label={
                  <div className="flex flex-col justify-center items-center grow">
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                      }}
                      src={updatedAvatarPreview}
                    />
                    {updatedProfileData?.avatar && (
                      <div className="text-sm p-2 text-gray-500">
                        {updatedProfileData.avatar.name}
                      </div>
                    )}
                  </div>
                }
              />
            </Tooltip>
            <Input
              error={
                updatedProfileData?.name != null &&
                updatedProfileData?.name.trim().length < 8
              }
              defaultValue={profileData?.name}
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
              defaultValue={profileData?.userId}
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
              defaultValue={profileData?.email}
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
              defaultValue={profileData?.phone}
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
