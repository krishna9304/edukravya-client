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

function Navbar({
  extended,
  setExtended,
}: {
  extended: boolean;
  setExtended: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <nav className="fixed z-10 top-0 left-0 w-full bg-primary-700 bg-opacity-90 backdrop-blur-sm px-2 pt-4 pb-2 items-center justify-between flex">
        <div className="flex gap-4 items-center justify-center">
          <Hamburger />
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
        <div className="flex justify-center items-center">
          {!extended && (
            <Tooltip title="PROFILE">
              <IconButton>
                <Avatar />
              </IconButton>
            </Tooltip>
          )}
          <IconButton
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
      </nav>
      {/* expanded nav */}
      <div
        className={`flex px-20 pt-24 flex-col gap-6 md:flex-row md:justify-start justify-center bg-primary-700 items-center w-full p-8 z-0 
        ${extended ? "" : "h-0 scale-y-0 hidden"} duration-300`}
      >
        <span className="w-60 rounded-full ring-8 hover:ring-4 ring-secondary-500 duration-300">
          <Avatar
            sx={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </span>
        <div className="flex w-full gap-2 justify-between md:items-center">
          <div className="flex flex-col w-full justify-center items-center md:items-start">
            <div className="text-3xl md:text-5xl font-light text-white font-sans">
              Dummy_Student
            </div>
            <div className="text-white italic underline font-mono flex gap-1 items-center justify-center px-2">
              @student_student
              <Tooltip placement="right" title="COPY USERNAME">
                <IconButton size="small">
                  <ContentCopyRounded className="text-white" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="max-w-sm text-white text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              beatae quo nobis assumenda voluptates dolore asperiores sint
              expedita facere modi.
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

function Hamburger() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open: boolean = Boolean(anchorEl);
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Download</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
