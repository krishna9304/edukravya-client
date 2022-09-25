import { Button } from "@mui/material";
import React from "react";
interface TestData {
  name: string;
  duration: number;
  batch: string;
  _id: string;
  marks: number;
  questions: number;
}
function TestCard({ testData }: { testData: TestData }) {
  return (
    <div className="bg-white rounded-xl h-full">
      <div className="font-bold text-white flex justify-center rounded-t-xl text-lg bg-primary-700 px-7 py-2">
        {testData.name}
      </div>
      <div className="rounded-b-xl px-7 pb-4 space-y-2 py-2">
        <div>
          <div>Duration: {testData.duration} mins</div>
          <div className="flex gap-2 min-w-max">
            <div>Marks: {testData.marks}</div>
            <div className="w-0.5 bg-gray-500 rounded-full" />
            <div>{testData.questions} questions</div>
          </div>
          <div>{testData.batch}</div>
        </div>
        <Button variant="contained">Attempt</Button>
      </div>
    </div>
  );
}
export default TestCard;
