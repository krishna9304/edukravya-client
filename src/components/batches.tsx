import React, { useState } from "react";
import BatchCard, { BatchData } from "../components/batchcard";
import batchImg from "../assets/demobatch.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Batches() {
  const [myBatches, setMyBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
  ]);
  const [mayLikeBatches, setMayLikeBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
  ]);

  const [medicalBatches, setmedicalBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
  ]);
  const [engineeringBatches, setEngineeringBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
  ]);
  const [civilBatches, setCivilBatches] = useState<BatchData[]>([
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
    {
      batchId: "1234567890",
      thumbnail: batchImg,
      title: "Batch Title",
    },
  ]);

  return (
    <div className="pb-16 flex flex-col w-full gap-2">
      <div className=" text-secondary-700 text-2xl font-bold px-10 pt-6 flex justify-between">
        BATCHES
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="flex w-full justify-between">
          <div className=" font-bold text-xl">My batches </div>
          <Link to="/addbatch">
            <Button variant="contained">new</Button>
          </Link>
        </div>
        <div className="p-4 overflow-auto rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 flex gap-4">
          {myBatches.map((batch: BatchData, idx: number) => {
            return <BatchCard key={idx} batchData={batch} />;
          })}
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">
          Batches you may want to explore !!
        </div>
        <div className="p-4 overflow-auto rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 flex gap-4">
          {mayLikeBatches.map((batch: BatchData, idx: number) => {
            return <BatchCard batchData={batch} key={idx} />;
          })}
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Medical Enterance Batches </div>
        <div className="p-4 overflow-auto rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 flex gap-4">
          {myBatches.map((batch: BatchData, idx: number) => {
            return <BatchCard batchData={batch} key={idx} />;
          })}
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Engineering Enterance Batches</div>
        <div className="p-4 overflow-auto rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 flex gap-4">
          {myBatches.map((batch: BatchData, idx: number) => {
            return <BatchCard batchData={batch} key={idx} />;
          })}
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Civil Services Exam Batches</div>
        <div className="p-4 overflow-auto rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 flex gap-4">
          {myBatches.map((batch: BatchData, idx: number) => {
            return <BatchCard batchData={batch} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Batches;
