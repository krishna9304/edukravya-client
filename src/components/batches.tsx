import React from "react";
import BatchCard from "../components/batchcard";

function Batches() {
  return (
    <div className="pb-16 flex flex-col w-full gap-2">
      <div className="text-2xl font-bold px-10 pt-6 flex justify-between">
        BATCHES
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className=" font-bold text-xl">My batches </div>
        <div className="p-4 overflow-auto rounded-3xl bg-slate-300 flex gap-4">
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">
          Batches you may want to explore !!
        </div>
        <div className="p-4 overflow-auto rounded-3xl bg-slate-300 flex gap-4">
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Medical Enterance Batches </div>
        <div className="p-4 overflow-auto rounded-3xl bg-slate-300 flex gap-4">
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Engineering Enterance Batches</div>
        <div className="p-4 overflow-auto rounded-3xl bg-slate-300 flex gap-4">
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
        </div>
      </div>
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">Civil Services Exam Batches</div>
        <div className="p-4 overflow-auto rounded-3xl bg-slate-300 flex gap-4">
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
          <BatchCard
            thumbnail={"../src/assets/demobatch.svg"}
            title="Batch title"
          />
        </div>
      </div>
    </div>
  );
}

export default Batches;
