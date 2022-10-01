import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface BatchData {
  title?: string;
  thumbnail?: string;
  batchId?: string;
  description?: string;
}

export default function BatchCard({ batchData }: { batchData: BatchData }) {
  return (
    <div
      className={`p-4 snap-start sm:snap-center flex flex-col h-[16rem] sm:h-72 aspect-[5/4] bg-primary-500 rounded-2xl duration-300`}
    >
      <img
        className="bg-white rounded-xl aspect-video w-full"
        src={batchData.thumbnail}
        alt="batch thumbnail"
      />
      <div className="flex w-full justify-between sm:flex-col items-center">
        <div className="py-2 w-full flex justify-between px-2 h-full text-white font-semibold min-w-fit">
          {batchData.title}
          <Link to={`/batch/${batchData.batchId}`}>
            <Button
              color="info"
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
