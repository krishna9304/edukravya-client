import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function videoCard() {
  return (
    <div
      className={`p-4 snap-start sm:snap-center flex flex-col h-[16rem] sm:h-72 aspect-[5/4] bg-white rounded-lg duration-300`}
    >
      <img src="" alt="" />
      <div className="flex w-full justify-between sm:flex-col items-center">
        <div className="py-2 w-full flex justify-end px-2 h-full text-white font-semibold min-w-fit">
          <Link to="/live/kuch_v">
            <Button
              color="primary"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="medium"
            >
              Start class
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
