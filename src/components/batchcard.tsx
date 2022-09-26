import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface BatchData {
  title: string;
  thumbnail: string;
  batchId: string;
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
      <div className="flex justify-between py-2 sm:flex-col items-center">
        <div className="py-2 h-full text-white font-semibold min-w-fit">
          {batchData.title}
        </div>
        <div className="flex flex-row-reverse sm:flex-row w-full justify-between gap-2">
          <Tooltip title="copy Batch Link" className="hidden sm:block">
            <Button
              onClick={() =>
                navigator.clipboard
                  .writeText(`${location.origin}/batch/${batchData.batchId}`)
                  .then(() => toast.success("Batch Link Copied"))
                  .catch(() => toast.error("Failed to share Link"))
              }
              color="info"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="small"
            >
              Share
            </Button>
          </Tooltip>
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
