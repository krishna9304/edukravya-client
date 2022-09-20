import {
  IconButton,
  Menu,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon, SearchOutlined } from "@mui/icons-material";

function Navbar() {
  return (
    <nav className="w-full bg-blue-700 p-2 items-center justify-between flex">
      <div className="flex gap-4 items-center justify-center">
        <Hamburger />
        <span className="font-bold md:text-5xl text-3xl">EDUKRAVYA</span>
      </div>
      <div className="flex md:w-full md:justify-center items-center">
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
      <div className={`hidden md:flex w-[16.875rem] md:w-[27rem]`}></div>
      <div className="w-[3rem]"></div>
    </nav>
  );
}

function Hamburger() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open: boolean = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon />
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
    </>
  );
}

export default Navbar;
