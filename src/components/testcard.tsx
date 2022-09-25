import { Button } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";

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
    <div className="rounded-xl snap-start h-full cursor-pointer border border-primary-700">
      <div className="font-bold text-white flex justify-center rounded-t-xl text-lg bg-primary-700 px-7 py-2">
        {testData.name}
      </div>
      <div className="rounded-b-xl bg-white px-7 pb-4 space-y-2 py-2">
        <div>
          <div>Duration: {testData.duration} mins</div>
          <div className="flex gap-2 min-w-max">
            <div>Marks: {testData.marks}</div>
            <div className="border-l rounded-full" />
            <div>{testData.questions} questions</div>
          </div>
          <div>{testData.batch}</div>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="contained">Attempt</Button>
        </div>
      </div>
    </div>
  );
}
export default TestCard;
