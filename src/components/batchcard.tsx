import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export interface BatchData {
  title: string;
  thumbnail: string;
  batchPage: string;
}

export default function BatchCard({ batchData }: { batchData: BatchData }) {
  return (
    <div
      className={`p-4 flex flex-col h-[16rem] sm:h-72 aspect-[5/4] bg-primary-500 rounded-2xl duration-300`}
    >
      <img
        className="bg-white rounded-xl aspect-video w-full"
        src={batchData.thumbnail}
        alt="batch image"
      />
      <div className="flex justify-between py-2 sm:flex-col items-center">
        <div className="py-2 h-full text-white font-semibold min-w-fit">
          {batchData.title}
        </div>
        <div className="flex flex-row-reverse sm:flex-row w-full justify-between gap-2">
          <Link to="/" className="hidden sm:block">
            <Button
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="small"
            >
              Share
            </Button>
          </Link>
          <Link to={batchData.batchPage}>
            <Button
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="small"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
