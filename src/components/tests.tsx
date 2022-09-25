import { Avatar } from "@mui/material";
import { useState } from "react";
import TestCard from "../components/testcard";

function Tests() {
  const [toppers, setToppers] = useState({
    first: {
      _id: "1234567890",
      avatar: "",
      name: "Tomperrr",
      marks: 99,
    },
    second: {
      _id: "1234567890",
      avatar: "",
      name: "Tomperr",
      marks: 98,
    },
    third: {
      _id: "1234567890",
      avatar: "",
      name: "Tomper",
      marks: 97,
    },
    isLive: true,
    testName: "Sasta Jee 2.0",
  });
  const [myResult, setMyResult] = useState({
    _id: "1234567890",
    avatar: "",
    name: "My Long Name",
    marks: 100,
    rank: 999,
    correct: 100,
    wrong: 0,
  });
  return (
    <div className="flex flex-col px-4 lg:flex-row-reverse w-screen">
      <div className="w-full flex justify-center py-6">
        <div className="lg:pt-24 w-screen lg:max-w-fit sm:px-4">
          <div className="bg-primary lg:sticky top-32 py-6 lg:py-4 px-4 lg:px-8 rounded-xl lg:max-w-fit min-w-max bg-primary-500">
            <div className="flex gap-2 justify-between items-center">
              <span className="text-white text-xl min-w-max">
                {toppers.testName} Results
              </span>
              <span className="flex bg-white ring-2 ring-white justify-center max-w-fit items-center px-2 font-bold rounded-full text-green-400 border-[3px] border-green-400">
                Live
              </span>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div className="font-bold text-lg">Toppers</div>
              <div className="space-y-4 flex flex-col">
                <div className="flex w-full items-center bg-white py-2 px-4 rounded-lg justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <Avatar src={toppers.first.avatar} />
                    <span className="font-semibold min-w-max">
                      {toppers.first.name}
                    </span>
                    <div className="font-semibold text-sm min-w-fit">
                      Rank: 1
                    </div>
                  </div>
                  <span className="font-semibold text-green-500">
                    {toppers.first.marks}%
                  </span>
                </div>
                <div className="flex w-full items-center bg-white py-2 px-4 rounded-lg justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <Avatar src={toppers.second.avatar} />
                    <span className="font-semibold min-w-max">
                      {toppers.second.name}
                    </span>
                    <div className="font-semibold text-sm min-w-fit">
                      Rank: 2
                    </div>
                  </div>
                  <span className="font-semibold text-green-500">
                    {toppers.second.marks}%
                  </span>
                </div>
                <div className="flex w-full items-center bg-white py-2 px-4 rounded-lg justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <Avatar src={toppers.third.avatar} />
                    <span className="font-semibold min-w-max">
                      {toppers.third.name}
                    </span>
                    <div className="font-semibold text-sm min-w-fit">
                      Rank: 3
                    </div>
                  </div>
                  <span className="font-semibold text-green-500">
                    {toppers.third.marks}%
                  </span>
                </div>
                <div className="font-bold text-lg">Your Result</div>
                <div className="bg-white py-2 px-2 md:px-4 rounded-lg w-full flex justify-around gap-2">
                  <div className="flex flex-col w-full">
                    <div className="flex min-w-max text-lg font-semibold md:gap-4 items-center">
                      <div>{myResult.name}</div>
                      <div className="border-l h-2/3" />
                      <div className="flex items-center justify-center text-center">
                        Rank: {myResult.rank}
                      </div>
                    </div>
                    <div className="flex justify-around w-2/3 gap-2">
                      <div className="font-semibold text-green-500 px-2 py-2 flex flex-col justify-center items-center">
                        <div>Correct</div>
                        <div>{myResult.correct}</div>
                      </div>
                      <div className="border-l-2 rounded-full" />
                      <div className="font-semibold text-red-500 rounded-lg px-2 py-2 flex flex-col justify-center items-center">
                        <div>Wrong</div>
                        <div>{myResult.wrong}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`font-semibold bg-gray-200 w-1/3 rounded-lg px-2 py-2 flex flex-col justify-center items-center`}
                  >
                    {myResult.marks}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sep */}
      <div className="pb-16 flex 2xl:w-3/4 flex-col gap-2">
        <div className="text-2xl font-bold px-10 pt-6 flex justify-between">
          TESTS
        </div>
        <div className="px-5 sm:px-10 py-4 flex flex-col gap-3">
          <div className="font-bold text-xl">ONGOING TESTS</div>
          <div className="p-4 overflow-auto rounded-lg bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
            <div className="snap-x snap-mandatory rounded-sm overflow-auto flex gap-4">
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
        </div>
        <div className="px-5 sm:px-10 py-4 flex flex-col gap-3">
          <div className="font-bold text-xl uppercase">Previous Tests</div>
          <div className="p-4 overflow-auto rounded-lg bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
            <div className="snap-x snap-mandatory rounded-sm overflow-auto flex gap-4">
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
      </div>
    </div>
  );
}
export default Tests;
