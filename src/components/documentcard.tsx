import { PictureAsPdfRounded, PrintRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export interface DocumentData {
  name: string;
  batch: string;
  _id: string;
}

function DocumentCard({ documentData }: { documentData: DocumentData }) {
  return (
    <div className="divide-x-2 sm:w-2/3 md:w-1/2 bg-pink-50 p-4 rounded-xl flex">
      <div className="px-4 flex justify-center items-center py-3 text-gray-500">
        <PictureAsPdfRounded
          color="inherit"
          sx={{
            fontSize: 40,
          }}
        />
      </div>
      <div className="px-8 space-y-2">
        <div className="">
          <div className="text-lg font-bold">{documentData.name}</div>
          <div className="text-sm">{documentData.batch}</div>
        </div>
        <Button variant="contained">Open</Button>
      </div>
    </div>
  );
}

export default DocumentCard;
