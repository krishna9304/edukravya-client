import { Button } from "@mui/material";
import React from "react";

export interface BookData {
  name: string;
  writer: string;
  batch: string;
  cost: number;
  cover: string;
  _id: string;
}

function BookCard({
  bookData,
  setActiveBook,
}: {
  bookData: BookData;
  setActiveBook: React.Dispatch<React.SetStateAction<null | BookData>>;
}) {
  return (
    <div>
      <div className="bg-white snap-center md:snapstart min-w-max gap-4 flex px-4 py-3 rounded-2xl">
        <div className="bg-gray-100 rounded-xl">
          <img
            className="h-48 aspect-[3/4] rounded-xl"
            src={bookData.cover}
            alt="Book cover"
          />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <div className="font-black">{bookData.name}</div>
            <div className="font-bold text-gray-700 text-sm">
              -{bookData.writer}
            </div>
          </div>
          <div className="text-sm font-semibold">{bookData.batch}</div>
          <div className="text-primary-700 font-bold">Rs. {bookData.cost}</div>
          <Button
            onClick={() => {
              setActiveBook(bookData);
            }}
            variant="contained"
            color="primary"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
