import React from "react";
import OneTree from "./onetree";

function LearningTrees() {
  return (
    <div className="w-full flex flex-col grow bg-secondary-100">
      <div className="uppercase text-secondary-700 text-2xl font-bold px-10 pt-6 flex justify-between">
        Learning tree
      </div>
      <div className="w-screen px-6 sm:px-10">
        <div className="md:flex gap-5 md:overflow-scroll">
          <OneTree
            teacherName="Bhanu Pratap"
            batchId="2134567890"
            batchName="Backlog 2.0"
            chapters={[
              {
                name: "chap 1",
                done: true,
              },
              {
                name: "chap 2",
                done: true,
              },
              {
                name: "chap 3",
                done: true,
              },
              {
                name: "chap 4",
                done: true,
              },
              {
                name: "chap 5",
                done: false,
              },
              {
                name: "chap 6",
                done: false,
              },
              {
                name: "chap 6",
                done: false,
              },
            ]}
          />
          <OneTree
            teacherName="Bhanu Pratap"
            batchId="2134567890"
            batchName="Backlog 3.0"
            chapters={[
              {
                name: "chap 1",
                done: true,
              },
              {
                name: "chap 2",
                done: true,
              },
              {
                name: "chap 3",
                done: true,
              },
              {
                name: "chap 4",
                done: true,
              },
              {
                name: "chap 5",
                done: false,
              },
              {
                name: "chap 6",
                done: false,
              },
              {
                name: "chap 6",
                done: false,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default LearningTrees;
