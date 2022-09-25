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
    <div>
      <div className="bg-white rounded-lg">
        <div className="font-bold text-white flex justify-center rounded-t-md text-lg bg-primary-700 px-7 py-2">
          {testData.name}
        </div>
        <div className="bg-secondary-50 rounded-b-lg px-7 pb-4 space-y-2 py-2">
          <div>
            <div>Duration: {testData.duration} mins</div>
            <div className="flex gap-1">
              <div>Marks: {testData.marks}</div>
              <div className="w-0.5 bg-secondary-200" />
              <div>{testData.questions} questions</div>
            </div>
            <div>{testData.batch}</div>
          </div>
          <Button variant="outlined">Attempt</Button>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
