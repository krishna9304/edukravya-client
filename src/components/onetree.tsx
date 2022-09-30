import { DoneRounded, PendingRounded } from "@mui/icons-material";

interface Chapter {
  name: string;
  done: boolean;
}

interface OneTreeProps {
  batchName: string;
  batchId: string;
  chapters: Chapter[];
  teacherName: string;
}

function OneTree({ batchName, batchId, chapters, teacherName }: OneTreeProps) {
  return (
    <div className="w-full py-4 flex flex-col gap-3">
      <div className="font-bold text-xl">{batchName} </div>
      <div className="p-4 flex-col items-center overflow-auto rounded-md bg-white border-2 shadow-lg flex">
        {chapters.map((chapter: Chapter, idx: number) => {
          return (
            <div
              key={idx}
              className="flex flex-col justify-center items-center"
            >
              <div
                className={`flex gap-2 px-3 py-2 font-semibold rounded-md ${
                  chapter.done ? "bg-green-400" : "bg-red-400"
                }`}
                onClick={(): void => {
                  // server call
                }}
              >
                <div>{chapter.name}</div>
                <div>{chapter.done ? <DoneRounded /> : <PendingRounded />}</div>
              </div>
              {idx < chapters.length - 1 && (
                <div
                  className={`border-l-4 py-3 ${
                    chapter.done
                      ? "border-solid border-green-400"
                      : "border-dashed border-red-400"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OneTree;
