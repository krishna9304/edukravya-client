import React from "react";
import TestCard from "../components/testcard";
function Tests() {
  return (
    <div className="flex">
      <div className="pb-16 flex flex-col w-full gap-2">
        <div className="text-2xl font-bold px-10 pt-6 flex justify-between">
          TESTS
        </div>
        <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
          <div className="font-bold text-xl">ONGOING TESTS</div>
          <div className="p-4 overflow-auto rounded-lg bg-slate-300 flex gap-4">
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />
          </div>
        </div>
        <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
          <div className="font-bold text-xl">ONGOING TESTS</div>
          <div className="p-4 overflow-auto rounded-lg bg-slate-300 flex gap-4">
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />{" "}
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />{" "}
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />{" "}
            <TestCard
              testData={{
                name: "Test Name",
                duration: 180,
                _id: "1234567890",
                questions: 90,
                batch: "Backlog 2.0",
                marks: 300,
              }}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Tests;
