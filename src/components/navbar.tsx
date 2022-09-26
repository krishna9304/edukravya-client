import {
  IconButton,
  Menu,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Avatar,
  Tooltip,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import {
  CloseRounded,
  ContentCopyRounded,
  MenuRounded,
  SearchOutlined,
} from "@mui/icons-material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import studylogo from "../assets/studylogo.svg";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { removeUser, User } from "../redux/slices/user";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Navbar({
  extended,
  setExtended,
}: {
  extended: boolean;
  setExtended: Dispatch<SetStateAction<boolean>>;
}) {
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );

  return (
    <>
      <nav className="fixed h-20 z-10 top-0 left-0 w-full bg-primary-700 bg-opacity-90 backdrop-blur-sm px-2 pt-4 pb-2 items-center justify-between flex">
        <div className="flex gap-4 items-center justify-center">
          {user._id && <Hamburger _id={user._id} />}
          <Logo />
        </div>
        <div className="hidden sm:flex md:w-full md:justify-center items-center">
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <SearchOutlined fontSize="small" />
              </InputAdornment>
            }
            placeholder={"Search"}
            size="small"
            sx={{
              fontSize: 14,
            }}
            className="w-60 hidden sm:block md:w-96n-w-s/3 bg-white"
          />
        </div>
        {user._id && (
          <div className="flex justify-center items-center">
            {!extended && (
              <Tooltip title="PROFILE">
                <IconButton>
                  <Avatar src={user.avatar} />
                </IconButton>
              </Tooltip>
            )}
            <IconButton
              sx={{
                color: "#fff",
              }}
              onClick={() => {
                setExtended((pe) => !pe);
              }}
            >
              {extended ? (
                <Tooltip title="COLLAPSE NAVBAR">
                  <CloseRounded />
                </Tooltip>
              ) : (
                <Tooltip title="EXPAND NAVBAR">
                  <ExpandMoreRoundedIcon />
                </Tooltip>
              )}
            </IconButton>
          </div>
        )}
      </nav>
      {/* expanded nav */}
      <div
        className={`flex px-20 pt-24 flex-col gap-6 md:flex-row md:justify-start justify-center bg-primary-700 items-center w-full p-8 z-0 
        ${extended ? "" : "h-0 scale-y-0 hidden"} duration-300`}
      >
        <span className="w-60 rounded-full ring-8 hover:ring-4 ring-secondary-500 duration-300">
          <Avatar
            src={user.avatar}
            sx={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </span>
        <div className="flex w-full gap-2 justify-between md:items-center">
          <div className="flex gap-2 flex-col w-full justify-center items-center md:items-start">
            <div className="flex gap-1 justify-center items-baseline">
              <div className="text-3xl font-semibold md:text-5xl text-white font-sans">
                {user.name}
              </div>
              <Tooltip placement="right" title="COPY USERNAME">
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${location.origin}/user/${user._id}`
                    );
                  }}
                  size="medium"
                >
                  <ContentCopyRounded
                    fontSize={"medium"}
                    className="text-white"
                  />
                </IconButton>
              </Tooltip>
            </div>
            <div className="max-w-sm text-white text-center md:text-start">
              {user.bio
                ? user.bio
                : "Tell us more about you using profile page"}
            </div>
          </div>
          <div className="hidden lg:block max-w-sm transform">
            <img src={studylogo} alt="theme image" />
          </div>
        </div>
      </div>
    </>
  );
}

function Hamburger({ _id }: { _id?: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, , removeCookie] = useCookies(["jwt"]);
  const open: boolean = Boolean(anchorEl);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose: () => void = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <span className="text-4xl h-10 w-10 flex items-center justify-center">
          <MenuRounded fontSize="inherit" className="text-white" />
        </span>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={`/user/${_id}`}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to="/batches/documents">
          <MenuItem onClick={handleClose}>Documents</MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            removeCookie("jwt");
            dispatch(removeUser({}));
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
